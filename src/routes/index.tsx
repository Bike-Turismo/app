import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes: FC = () => {
  return (
    <NavigationContainer>
      {/* <AuthRoutes /> */}
      <AppRoutes />
    </NavigationContainer>
  );
};

export default Routes;
