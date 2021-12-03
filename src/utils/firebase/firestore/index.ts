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
  query as queryCollection,
  where as whereCollection,
  limit as limitCollection,
  orderBy as orderByCollection,
  CollectionReference,
  DocumentReference,
  DocumentData,
  WithFieldValue,
  UpdateData,
} from 'firebase/firestore';
import firebaseConfig from '../../../../firebase-config.json';
import { OrderByBuilder, QueryBuilder, UpdateFields } from './types';

initializeApp(firebaseConfig);

const db = getFirestore();

const getDocRef = (path: string, ...pathSegments: string[]) => doc(db, path, ...pathSegments);

const getCollectionRef = (path: string, ...pathSegments: string[]) => collection(db, path, ...pathSegments);

const getDoc = (docRef: DocumentReference<DocumentData>) => getDocument(docRef);

const getDocs = (collectionRef: CollectionReference<DocumentData>) => getCollection(collectionRef);

const addDoc = (collectionRef: CollectionReference<DocumentData>, data: WithFieldValue<DocumentData>) =>
  addDocument(collectionRef, data);

const setDoc = (docRef: DocumentReference<DocumentData>, data: WithFieldValue<DocumentData>) =>
  setDocument(docRef, data);

const updateDoc = (docRef: DocumentReference<DocumentData>, data: UpdateData<UpdateFields>) =>
  updateDocument(docRef, data);

const deleteDoc = (docRef: DocumentReference<DocumentData>) => deleteDocument(docRef);

const where = (collectionRef: CollectionReference<DocumentData>, querys: Array<QueryBuilder>) => {
  const whereQuerys = querys.map(({ fieldPath, opStr, value }) => whereCollection(fieldPath, opStr, value));
  return queryCollection(collectionRef, ...whereQuerys);
};

const orderBy = (collectionRef: CollectionReference<DocumentData>, querys: Array<OrderByBuilder>) => {
  const orderByQuerys = querys.map(({ fieldPath, directionStr }) => orderByCollection(fieldPath, directionStr));
  return queryCollection(collectionRef, ...orderByQuerys);
};

const limit = (collectionRef: CollectionReference<DocumentData>, limitQtd: number) =>
  queryCollection(collectionRef, limitCollection(limitQtd));

export { getDocRef, getCollectionRef, getDoc, getDocs, addDoc, setDoc, updateDoc, deleteDoc, where, orderBy, limit };
