import AppError from 'errors/app-error';
import RouteModel, { IRoute } from 'models/route';
import { getCollectionRef, where, getDocs, orderBy, limit } from 'utils/firebase';
import { QueryDocumentSnapshot } from 'utils/firebase/firestore/types';

class RouteRepository {
  public static readonly collection = 'routes';

  public async getRoutesByName({ name }: RouteModel): Promise<Array<RouteModel>> {
    try {
      const nameInUpperCase = name?.toUpperCase();
      const collection = getCollectionRef<IRoute>(RouteRepository.collection);
      const whereQueries = where(collection, [
        { fieldPath: 'name_insensitive', opStr: '>=', value: nameInUpperCase },
        { fieldPath: 'name_insensitive', opStr: '<=', value: `${nameInUpperCase}\uf8ff` },
      ]);
      const orderByQueries = orderBy(whereQueries, [{ fieldPath: 'name_insensitive' }]);
      const limitQuery = limit(orderByQueries, 5);

      const queryResult = await getDocs(limitQuery).catch(() =>
        Promise.reject(new AppError('Query exception when finding user by name')),
      );

      if (queryResult.empty) {
        return [];
      }

      const buildRouteModels = (doc: QueryDocumentSnapshot<IRoute>) => new RouteModel({ ...doc.data(), index: doc.id });
      return queryResult.docs.map(buildRouteModels);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

export default RouteRepository;
