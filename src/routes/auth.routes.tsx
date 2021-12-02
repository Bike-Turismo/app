import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from 'pages';

const Stack = createNativeStackNavigator();

const AuthRoutes: FC = function () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
