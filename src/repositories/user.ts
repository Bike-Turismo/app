import AppError from 'errors/app-error';
import UserModel, { IUser } from 'models/user';
import { getCollectionRef, where, getDocs } from 'utils/firebase';

class UserRepository {
  public static readonly collection = 'users';

  public async getUserByName({ name }: UserModel) {
    try {
      const collection = getCollectionRef(UserRepository.collection);
      const query = where(collection, [{ fieldPath: 'name', opStr: '==', value: name }]);
      const queryResult = await getDocs(query).catch(() =>
        Promise.reject(new AppError('Query exception when finding user by name')),
      );

      if (queryResult.empty) {
        throw new AppError('User not found by name');
      }
      const doc = queryResult.docs[0];
      if (doc.exists) {
        const data = doc.data();

        return data as IUser;
      }
      throw new AppError('User does not exist');
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

export default UserRepository;
