/* eslint-disable no-console */
import app from '@react-native-firebase/app';
import '@react-native-firebase/auth';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { IUserAuth } from './types';

import googleServices from '../../../../android/app/google-services.json';

const auth = app.auth();

GoogleSignin.configure({ webClientId: googleServices.client[0].oauth_client[2].client_id });

async function googleSignIn() {
  GoogleSignin.configure;
  const { idToken } = await GoogleSignin.signIn();

  const googleCredential = app.auth.GoogleAuthProvider.credential(idToken);

  return auth.signInWithCredential(googleCredential);
}

const onAuthStateChanged = (callback: (user: IUserAuth | null) => void) => {
  return auth.onAuthStateChanged(user => {
    if (user !== null) {
      return callback({
        email: user.email,
      });
    }
    return callback(null);
  });
};

const signOut = () => {
  return auth.signOut();
};

export { googleSignIn, onAuthStateChanged, signOut };
