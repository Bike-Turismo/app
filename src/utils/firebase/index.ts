import { IUserAuth } from './auth/types';

interface IAuthMethods {
  googleSignIn(): Promise<void>;
  onAuthStateChanged(callback: (user: IUserAuth | null) => void): () => void;
  signOut(): void;
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { googleSignIn, onAuthStateChanged, signOut }: IAuthMethods = require('./auth');

export { googleSignIn, onAuthStateChanged, signOut };

interface IFirestoreMethods {
  getDocRef(): any;
  getCollectionRef(path: string): any;
  getDoc(): any;
  getDocs(collectionRef: any): any;
  addDoc(): any;
  setDoc(): any;
  updateDoc(): any;
  deleteDoc(): any;
  where(v: any, vv: any): any;
}

const {
  getDocRef,
  getCollectionRef,
  getDoc,
  getDocs,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  where,
}: // eslint-disable-next-line @typescript-eslint/no-var-requires
IFirestoreMethods = require('./firestore');

export { getDocRef, getCollectionRef, getDoc, getDocs, addDoc, setDoc, updateDoc, deleteDoc, where };
