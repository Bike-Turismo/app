import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuth } from 'hooks/Auth';
import React, { FC, useCallback } from 'react';
import { RootStackParamList } from 'routes/types';
import { PropsExternal, Props } from './types';

const useController = (Component: FC<Props>, { tintColor }: PropsExternal) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { user, signOut, isUserDataPresent } = useAuth();

  const textPressable = !user ? 'Entrar' : 'Sair';
  const handleOnPressAction = useCallback(() => {
    if (!user) {
      navigation.navigate('SignIn');
    } else {
      signOut();
      navigation.navigate('Home');
    }
  }, [navigation, signOut, user]);

  return (
    <Component
      handleOnPressAction={handleOnPressAction}
      tintColor={tintColor}
      textPressable={textPressable}
      isLoading={!isUserDataPresent}
    />
  );
};

export default useController;
