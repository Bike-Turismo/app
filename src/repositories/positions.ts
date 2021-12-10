import AppError from 'errors/app-error';
import PositionsModel, { IPositions } from 'models/positions';
import { IRoute } from 'models/route';
import { getCollectionRef, getDocs } from 'utils/firebase';
import { DocumentReference, QueryDocumentSnapshot } from 'utils/firebase/firestore/types';

class PositionsRepository {
  public static readonly collection = 'positions';

  public async getAllPositionsFromRoute(routePath: string): Promise<Array<PositionsModel>> {
    try {
      const collection = getCollectionRef<IPositions>(routePath, PositionsRepository.collection);

      const queryResult = await getDocs(collection).catch(() =>
        Promise.reject(new AppError('Query exception when getting positions from route')),
      );

      if (queryResult.empty) {
        return [];
      }

      const buildPositionsModels = (doc: QueryDocumentSnapshot<IPositions>) => new PositionsModel({ ...doc.data() });

      return queryResult.docs.map(buildPositionsModels);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

export default PositionsRepository;
