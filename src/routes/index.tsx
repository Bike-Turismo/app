import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Stack = createNativeStackNavigator();

const Routes: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {AppRoutes({ Stack })}
        {AuthRoutes({ Stack })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
