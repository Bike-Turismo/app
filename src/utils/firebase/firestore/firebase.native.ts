import app from '@react-native-firebase/app';
import '@react-native-firebase/firestore';
import { CollectionReference, DocumentData, DocumentReference, UpdateData, UpdateFields } from './types';

const db = app.firestore();

export { db };

const buildPath = ([firstLetter, ...path]: string, ...pathSegments: string[]) =>
  (firstLetter === '/' ? '' : firstLetter) +
  path.join('') +
  (pathSegments.length > 0 ? `/${pathSegments.join('/')}` : '');

const getDocRef = (path: string, ...pathSegments: string[]) => db.doc(buildPath(path, ...pathSegments));

const getCollectionRef = (path: string, ...pathSegments: string[]) => db.collection(buildPath(path, ...pathSegments));

const getDoc = (ref: DocumentReference<DocumentData>) => ref.get();

const getDocs = (ref: CollectionReference<DocumentData>) => ref.get();

const addDoc = (ref: CollectionReference<DocumentData>, data: DocumentData) => ref.doc().set(data);

const setDoc = (ref: DocumentReference<DocumentData>, data: DocumentData) => ref.set(data);

const updateDoc = (ref: DocumentReference<DocumentData>, data: UpdateData<UpdateFields>) => ref.update(data);

const deleteDoc = (ref: DocumentReference<DocumentData>) => ref.delete();

export { getDocRef, getCollectionRef, getDoc, getDocs, addDoc, setDoc, updateDoc, deleteDoc };
