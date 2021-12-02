import React, { FC } from 'react';
import { googleSignIn } from '../../utils/firebase';
import { Props } from './types';

const useController = (Component: FC<Props>) => {
  const handleOnClickGoogleLogIn = () => {
    googleSignIn();
  };

  return <Component handleOnClickGoogleLogIn={handleOnClickGoogleLogIn} />;
};

export default useController;
