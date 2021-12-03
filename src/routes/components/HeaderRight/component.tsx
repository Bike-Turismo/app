import React, { FC } from 'react';
import { Text, Pressable } from 'native-base';
import { Props } from './types';

const component: FC<Props> = ({ tintColor, handleOnPressLogIn }: Props) => {
  return (
    <Pressable mr="15px" onPress={handleOnPressLogIn}>
      <Text fontSize="lg" fontWeight="bold" color={tintColor}>
        Login
      </Text>
    </Pressable>
  );
};

export default component;
