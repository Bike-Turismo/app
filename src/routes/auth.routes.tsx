import React, { FC } from 'react';
import { SignIn } from 'pages';
import { screenOptions as screenOptionsBase } from 'routes';
import { PropsGroup } from './types';

const AuthRoutes: FC<PropsGroup> = function ({ Stack }: PropsGroup) {
  const screenOptions = { ...screenOptionsBase, headerRight: undefined };

  return (
    <Stack.Group>
      <Stack.Screen options={screenOptions} name="SignIn" component={SignIn} />
    </Stack.Group>
  );
};

export default AuthRoutes;
