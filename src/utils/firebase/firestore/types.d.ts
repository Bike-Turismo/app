import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

// Firebase
export type UpdateFields = {
  [x: string]: any;
};

// Firebase Mobile
export type DocumentReference<T> = FirebaseFirestoreTypes.DocumentReference<T>;
export type CollectionReference<T> = FirebaseFirestoreTypes.CollectionReference<T>;
export type DocumentData = FirebaseFirestoreTypes.DocumentData;
export type UpdateData<T> = Partial<T>;
