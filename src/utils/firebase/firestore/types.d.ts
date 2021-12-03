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
export type WhereFilterOp = FirebaseFirestoreTypes.WhereFilterOp;
export type FieldPath = FirebaseFirestoreTypes.FieldPath;
export type Query<T> = FirebaseFirestoreTypes.Query<T>;
export type DocumentSnapshot<T> = FirebaseFirestoreTypes.DocumentSnapshot<T>;
export type QuerySnapshot<T> = FirebaseFirestoreTypes.QuerySnapshot<T>;
export type WithFieldValue<T> = FirebaseFirestoreTypes.WithFieldValue<T>;

// Custom
export type QueryBuilder = { fieldPath: string | FieldPath; opStr: WhereFilterOp; value: unknown };

export type OrderByBuilder = { fieldPath: string | FieldPath; directionStr?: 'asc' | 'desc' };
