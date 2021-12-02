import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from 'pages';

const Stack = createNativeStackNavigator();

const AppRoutes: FC = function () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default AppRoutes;
