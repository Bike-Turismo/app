import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { RootStackParamList } from 'routes/types';
import { PropsExternal, Props } from './types';

const useController = (Component: FC<Props>, { tintColor }: PropsExternal) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleOnPressLogIn = () => {
    navigation.navigate('SignIn');
  };

  return <Component handleOnPressLogIn={handleOnPressLogIn} tintColor={tintColor} />;
};

export default useController;
