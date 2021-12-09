import React, { FC } from 'react';
import { SignIn } from 'pages';
import { PropsGroupAuth } from './types';

const AuthRoutes: FC<PropsGroupAuth> = function ({ Stack, screenOptionsBase }: PropsGroupAuth) {
  const screenOptions = { ...screenOptionsBase, headerRight: undefined };

  return (
    <Stack.Group>
      <Stack.Screen options={screenOptions} name="SignIn" component={SignIn} />
    </Stack.Group>
  );
};

export default AuthRoutes;
