/* eslint-disable react/no-unused-prop-types */
import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import { HeaderRight, HeaderTitle } from './components';

const Stack = createNativeStackNavigator();

export const screenOptions = {
  title: 'Bike turismo',
  headerTitle: HeaderTitle,
  headerStyle: {
    backgroundColor: '#06b6d4',
  },
  headerRight: HeaderRight,
  headerTintColor: '#fff',
};

const Routes: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        {AppRoutes({ Stack })}
        {AuthRoutes({ Stack, screenOptionsBase: screenOptions })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
