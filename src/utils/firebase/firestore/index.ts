import { initializeApp } from 'firebase/app';

import {
  getFirestore,
  doc,
  collection,
  getDoc as getDocument,
  getDocs as getCollection,
  addDoc as addDocument,
  setDoc as setDocument,
  updateDoc as updateDocument,
  deleteDoc as deleteDocument,
  CollectionReference,
  DocumentReference,
  DocumentData,
  WithFieldValue,
  UpdateData,
} from 'firebase/firestore';
import firebaseConfig from '../../../../firebase-config.json';
import { UpdateFields } from './types';

initializeApp(firebaseConfig);

const db = getFirestore();

const getDocRef = (path: string, ...pathSegments: string[]) => doc(db, path, ...pathSegments);

const getCollectionRef = (path: string, ...pathSegments: string[]) => collection(db, path, ...pathSegments);

const getDoc = (ref: DocumentReference<DocumentData>) => getDocument(ref);

const getDocs = (ref: CollectionReference<DocumentData>) => getCollection(ref);

const addDoc = (ref: CollectionReference<DocumentData>, data: WithFieldValue<DocumentData>) => addDocument(ref, data);

const setDoc = (ref: DocumentReference<DocumentData>, data: WithFieldValue<DocumentData>) => setDocument(ref, data);

const updateDoc = (ref: DocumentReference<DocumentData>, data: UpdateData<UpdateFields>) => updateDocument(ref, data);

const deleteDoc = (ref: DocumentReference<DocumentData>) => deleteDocument(ref);

export { getDocRef, getCollectionRef, getDoc, getDocs, addDoc, setDoc, updateDoc, deleteDoc };
