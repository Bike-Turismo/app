import React, { FC } from 'react';
import { SignIn } from 'pages';
import { PropsGroup } from './types';

const AuthRoutes: FC<PropsGroup> = function ({ Stack }: PropsGroup) {
  return (
    <Stack.Group>
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Group>
  );
};

export default AuthRoutes;
