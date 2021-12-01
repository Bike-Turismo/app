import { IAuthMethods, IFirestoreMethods } from './types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { googleSignIn, onAuthStateChanged, signOut }: IAuthMethods = require('./auth');

export { googleSignIn, onAuthStateChanged, signOut };

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
