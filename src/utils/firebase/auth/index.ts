import { initializeApp } from 'firebase/app';

import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { IUserAuth } from './types';
import firebaseConfig from '../../../../firebase-config.json';

initializeApp(firebaseConfig);

const auth = getAuth();

const googleSignIn = () => {
  const provider = new GoogleAuthProvider();

  return signInWithPopup(auth, provider);
};

const onAuthStateChanged = (callback: (user: IUserAuth | null) => void) => {
  const unsubscribe = auth.onAuthStateChanged(user => {
    if (user !== null) {
      return callback({
        email: user.email,
      });
    }
    return callback(null);
  });

  return () => {
    unsubscribe();
  };
};

const signOut = () => {
  return auth.signOut();
};

export { googleSignIn, onAuthStateChanged, signOut };
