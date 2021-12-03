import AppError from 'errors/app-error';
import RouteModel, { IRoute } from 'models/route';
import { getCollectionRef, where, getDocs, orderBy, limit } from 'utils/firebase';

class RouteRepository {
  public static readonly collection = 'routes';

  public async getRoutesByName({ name }: RouteModel): Promise<Array<RouteModel> | null> {
    try {
      const collection = getCollectionRef(RouteRepository.collection);
      const whereQueries = where(collection, [
        { fieldPath: 'name_insensitive', opStr: '>=', value: name },
        { fieldPath: 'name_insensitive', opStr: '<=', value: `${name}\uf8ff` },
      ]);
      const orderByQueries = orderBy(whereQueries, [{ fieldPath: 'name_insensitive' }]);
      const limitQuery = limit(orderByQueries, 5);

      const queryResult = await getDocs(limitQuery).catch(() =>
        Promise.reject(new AppError('Query exception when finding user by name')),
      );

      if (queryResult.empty) {
        return null;
      }

      const doc = queryResult.docs[0];
      if (doc.exists) {
        const data = new RouteModel({ ...doc.data(), index: doc.id });

        return [data];
      }

      return null;
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

export default RouteRepository;
