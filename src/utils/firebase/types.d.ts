import { IUserAuth } from './auth/types';
import {
  CollectionReference,
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  FieldPath,
  OrderByBuilder,
  Query,
  QueryBuilder,
  QuerySnapshot,
  UpdateData,
  UpdateFields,
  WhereFilterOp,
  WithFieldValue,
} from './firestore/types';

export interface IAuthMethods {
  googleSignIn(): Promise<void>;
  onAuthStateChanged(callback: (user: IUserAuth | null) => void): () => void;
  signOut(): void;
}

export interface IFirestoreMethods {
  getDocRef<T>(path: string, ...pathSegments: string[]): DocumentReference<T>;
  getCollectionRef<T>(path: string, ...pathSegments: string[]): CollectionReference<T>;
  getDoc<T>(docRef: DocumentReference<T>): Promise<DocumentSnapshot<T>>;
  getDocs<T>(collectionRef: CollectionReference<T> | Query<T>): Promise<QuerySnapshot<T>>;
  addDoc<T>(collectionRef: CollectionReference<T>, data: WithFieldValue<T>): Promise<DocumentReference<T>>;
  setDoc<T>(docRef: DocumentReference<T>, data: WithFieldValue<T>): Promise<void>;
  updateDoc<T>(docRef: DocumentReference<T>, data: UpdateData<T>): Promise<void>;
  deleteDoc<T>(docRef: DocumentReference<T>): Promise<void>;
  where<T>(collectionRef: CollectionReference<T> | Query<T>, querys: Array<QueryBuilder>): Query<T>;
  orderBy<T>(collectionRef: CollectionReference<T> | Query<T>, querys: Array<OrderByBuilder>): Query<T>;
  limit<T>(collectionRef: CollectionReference<T> | Query<T>, limitQtd: number): Query<T>;
}
