import React, { FC } from 'react';
import { FormControl, Input, Box, Button } from 'native-base';
import { Props } from './types';

const Component: FC<Props> = ({
  inputStates: {
    emailState: [email, setEmail],
    passwordState: [password, setPassword],
  },
  handleOnSubmit,
  handleOnClickGoogleLogIn,
}: Props) => {
  return (
    <Box w={{ base: '90%' }} alignSelf="center">
      <FormControl isRequired>
        <FormControl.Label>E-mail</FormControl.Label>
        <Input value={email} onChangeText={setEmail} type="email" placeholder="email" />
      </FormControl>
      <FormControl isRequired>
        <FormControl.Label>Senha</FormControl.Label>
        <Input value={password} onChangeText={setPassword} type="password" placeholder="password" />
      </FormControl>
      <Button onPress={handleOnSubmit}>Entrar</Button>
      <Button onPress={handleOnClickGoogleLogIn}>Google</Button>
    </Box>
  );
};

export default Component;
