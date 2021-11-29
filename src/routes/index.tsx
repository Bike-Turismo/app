import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthRoutes from './auth.routes';

const Routes: FC = () => {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
};

export default Routes;
