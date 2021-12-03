import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuth } from 'hooks/Auth';
import React, { FC } from 'react';
import { RootStackParamList } from 'routes/types';
import { Props } from './types';

const useController = (Component: FC<Props>) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { signIn } = useAuth();

  const handleOnClickGoogleLogIn = async () => {
    try {
      await signIn();
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
    }
  };

  return <Component handleOnClickGoogleLogIn={handleOnClickGoogleLogIn} />;
};

export default useController;
