/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react';
import { Box, Button, Link, Text } from 'native-base';
import { Props } from './types';

const Component: FC<Props> = ({ handleOnClickGoogleLogIn }: Props) => {
  return (
    <Box margin="auto">
      <Text alignSelf="center" textAlign="center" fontSize="3xl">
        Seja bem vindo {'\n'} de volta!
      </Text>
      <Button mt="20px" maxWidth={200} alignSelf="center" onPress={handleOnClickGoogleLogIn}>
        Login Google
      </Button>
      <Link mt="150px" alignSelf="center" onPress={handleOnClickGoogleLogIn}>
        Criar Conta
      </Link>
    </Box>
  );
};

export default Component;
