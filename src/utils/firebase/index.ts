import { IUserAuth } from './auth/types';

interface IAuthMethods {
  googleSignIn(): Promise<void>;
  onAuthStateChanged(callback: (user: IUserAuth | null) => void): () => void;
  signOut(): void;
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { googleSignIn, onAuthStateChanged, signOut }: IAuthMethods = require('./auth');

export { googleSignIn, onAuthStateChanged, signOut };

// interface IFirestoreMethods {
//   db: Promise<void>;
// }

const {
  getDocRef,
  getCollectionRef,
  getDoc,
  getDocs,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  // eslint-disable-next-line @typescript-eslint/no-var-requires
} = require('./firestore');

export { getDocRef, getCollectionRef, getDoc, getDocs, addDoc, setDoc, updateDoc, deleteDoc };
