import UserModel from 'models/user';
import React, { FC, useEffect, useState } from 'react';
import UserRepository from 'repositories/user';
import { googleSignIn, onAuthStateChanged, getCollectionRef, getDocs } from '../../utils/firebase';
import { IInputStates, Props } from './types';

const useController = (Component: FC<Props>) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const userRepository = new UserRepository();
    const userModel = new UserModel({ name: 'ale' });

    userRepository
      .getUserByName(userModel)
      .then(res => {
        console.log('res: ', res);
      })
      .catch(err => {
        console.log('err: ', err);
      });

    const path1 = getCollectionRef('/posts/first/test');
    // const path2 = getCollectionRef('/posts', 'first', 'test');
    // console.log(path1);
    // console.log(path2);
    // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // // @ts-ignore
    // getDocs(path1).then(res => console.log(res.docs.length));
    // // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // // @ts-ignore
    // getDocs(path2).then(res => console.log(res.docs.length));
    const subscriber = onAuthStateChanged(user => console.log(user));
    return subscriber; // unsubscribe on unmount
  }, []);

  const handleOnSubmit = () => {
    console.log(email, password);
  };
  const handleOnClickGoogleLogIn = () => {
    console.log('Google');
    googleSignIn();
  };

  const inputStates: IInputStates = {
    emailState: [email, (v: string) => setEmail(v)],
    passwordState: [password, (v: string) => setPassword(v)],
  };

  return (
    <Component
      handleOnSubmit={handleOnSubmit}
      inputStates={inputStates}
      handleOnClickGoogleLogIn={handleOnClickGoogleLogIn}
    />
  );
};

export default useController;
