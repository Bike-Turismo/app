import React, { FC } from 'react';
import { Text, Pressable, Spinner, Box } from 'native-base';
import { Props } from './types';

const component: FC<Props> = ({ tintColor, handleOnPressAction, textPressable, isLoading }: Props) => {
  if (isLoading) {
    return (
      <Box mr="15px">
        <Spinner color="#fff" accessibilityLabel="Carregando autenticação" />
      </Box>
    );
  }

  return (
    <Pressable mr="15px" onPress={handleOnPressAction}>
      <Text fontSize="lg" fontWeight="bold" color={tintColor}>
        {textPressable}
      </Text>
    </Pressable>
  );
};

export default component;
