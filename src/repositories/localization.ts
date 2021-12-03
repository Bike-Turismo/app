import AppError from 'errors/app-error';
import LocalizationModel, { ILocalization } from 'models/localization';
import { getCollectionRef, getDocs } from 'utils/firebase';
import { QueryDocumentSnapshot } from 'utils/firebase/firestore/types';

class LocalizationRepository {
  public static readonly collection = 'localizations';

  public async getAllLocations(): Promise<Array<LocalizationModel>> {
    try {
      const collection = getCollectionRef<ILocalization>(LocalizationRepository.collection);

      const queryResult = await getDocs(collection).catch(() =>
        Promise.reject(new AppError('Query exception when finding user by name')),
      );

      if (queryResult.empty) {
        return [];
      }

      const buildLocalizationModels = (doc: QueryDocumentSnapshot<ILocalization>) =>
        new LocalizationModel({ ...doc.data() });
      return queryResult.docs.map(buildLocalizationModels);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

export default LocalizationRepository;
