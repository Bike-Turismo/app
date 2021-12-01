import { IUserAuth } from './auth/types';
import {
  CollectionReference,
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  FieldPath,
  Query,
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
  getDocRef(path: string, ...pathSegments: string[]): DocumentReference<DocumentData>;
  getCollectionRef(path: string, ...pathSegments: string[]): CollectionReference<DocumentData>;
  getDoc(docRef: DocumentReference<DocumentData>): Promise<DocumentSnapshot<DocumentData>>;
  getDocs(collectionRef: CollectionReference<DocumentData>): Promise<QuerySnapshot<DocumentData>>;
  addDoc(
    collectionRef: CollectionReference<DocumentData>,
    data: WithFieldValue<DocumentData>,
  ): Promise<DocumentReference<DocumentData>>;
  setDoc(docRef: DocumentReference<DocumentData>, data: WithFieldValue<DocumentData>): Promise<void>;
  updateDoc(docRef: DocumentReference<DocumentData>, data: UpdateData<UpdateFields>): Promise<void>;
  deleteDoc(docRef: DocumentReference<DocumentData>): Promise<void>;
  where(
    collectionRef: CollectionReference<DocumentData>,
    querys: Array<{
      fieldPath: string | FieldPath;
      opStr: WhereFilterOp;
      value: unknown;
    }>,
  ): Query<DocumentData>;
}
