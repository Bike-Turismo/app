import AppError from 'errors/app-error';
import RouteModel, { IRoute } from 'models/route';
import { getCollectionRef, where, getDocs, orderBy, limit, getDocRef } from 'utils/firebase';
import { QueryDocumentSnapshot } from 'utils/firebase/firestore/types';

class RouteRepository {
  public static readonly collection = 'routes';

  public async getRoutesByCity({ id }: RouteModel): Promise<Array<RouteModel>> {
    try {
      if (!id) {
        throw new AppError('Query exception when finding route by id');
      }

      const collection = getCollectionRef<IRoute>(RouteRepository.collection);

      const localizationRef = getDocRef('localizations', id);
      const whereQueries = where(collection, [{ fieldPath: 'localization', opStr: '==', value: localizationRef }]);
      const orderByQueries = orderBy(whereQueries, [{ fieldPath: 'name' }]);
      const limitQuery = limit(orderByQueries, 5);

      const queryResult = await getDocs(limitQuery);

      if (queryResult.empty) {
        return [];
      }

      const buildRouteModels = (doc: QueryDocumentSnapshot<IRoute>) =>
        // removing localization ref to prevent react navigation non-serializable warning
        new RouteModel({ path: doc.ref.path, ...doc.data(), localization: undefined, id: doc.id });

      return queryResult.docs.map(buildRouteModels);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

export default RouteRepository;
