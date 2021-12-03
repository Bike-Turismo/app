/* eslint-disable @typescript-eslint/no-unused-vars */
import app from '@react-native-firebase/app';
import '@react-native-firebase/firestore';
import {
  CollectionReference,
  DocumentData,
  DocumentReference,
  UpdateData,
  UpdateFields,
  QueryBuilder,
  OrderByBuilder,
} from './types';

const db = app.firestore();

export { db };

const buildPath = ([firstLetter, ...path]: string, ...pathSegments: string[]) =>
  (firstLetter === '/' ? '' : firstLetter) +
  path.join('') +
  (pathSegments.length > 0 ? `/${pathSegments.join('/')}` : '');

const getDocRef = (path: string, ...pathSegments: string[]) => db.doc(buildPath(path, ...pathSegments));

const getCollectionRef = (path: string, ...pathSegments: string[]) => db.collection(buildPath(path, ...pathSegments));

const getDoc = (docRef: DocumentReference<DocumentData>) => docRef.get();

const getDocs = (collectionRef: CollectionReference<DocumentData>) => collectionRef.get();

const addDoc = (collectionRef: CollectionReference<DocumentData>, data: DocumentData) => collectionRef.doc().set(data);

const setDoc = (docRef: DocumentReference<DocumentData>, data: DocumentData) => docRef.set(data);

const updateDoc = (docRef: DocumentReference<DocumentData>, data: UpdateData<UpdateFields>) => docRef.update(data);

const deleteDoc = (docRef: DocumentReference<DocumentData>) => docRef.delete();

const where = (
  docRef: CollectionReference<DocumentData>,
  [{ fieldPath: firstFieldPath, opStr: firstOpStr, value: firstValue }, ...querys]: Array<QueryBuilder>,
) => {
  // Adding this to get the correct type, if you do know a better way, send a PR
  let newRef = docRef.where(firstFieldPath, firstOpStr, firstValue);

  querys.forEach(({ fieldPath, opStr, value }) => {
    newRef = docRef.where(fieldPath, opStr, value);
  }, docRef);

  return newRef;
};

const orderBy = (
  docRef: CollectionReference<DocumentData>,
  [{ fieldPath: firstFieldPath, directionStr: firstDirectionStr }, ...querys]: Array<OrderByBuilder>,
) => {
  // Adding this to get the correct type, if you do know a better way, send a PR
  let newRef = docRef.orderBy(firstFieldPath, firstDirectionStr);

  querys.forEach(({ fieldPath, directionStr }) => {
    newRef = docRef.orderBy(fieldPath, directionStr);
  }, docRef);

  return newRef;
};

const limit = (docRef: CollectionReference<DocumentData>, limitQtd: number) => docRef.limit(limitQtd);

export { getDocRef, getCollectionRef, getDoc, getDocs, addDoc, setDoc, updateDoc, deleteDoc, where, orderBy, limit };
