import React, { FC } from 'react';
import { Home } from 'pages';
import { PropsGroup } from './types';

const AppRoutes: FC<PropsGroup> = function ({ Stack }: PropsGroup) {
  return (
    <Stack.Group>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Group>
  );
};

export default AppRoutes;
