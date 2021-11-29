import React, { FC } from 'react';
import { FormControl, Input, Box, Button } from 'native-base';
import { Props } from './types';

const Component: FC<Props> = ({}: Props) => {
  // email
  // password
  // postal_code
  // street
  // street_number
  // state
  // city
  return (
    <Box w={{ base: '90%' }} alignSelf="center">
      <FormControl isRequired>
        <FormControl.Label>E-mail</FormControl.Label>
        <Input placeholder="e-mail" />
      </FormControl>
      <FormControl isRequired>
        <FormControl.Label>Senha</FormControl.Label>
        <Input type="password" placeholder="Senha" />
      </FormControl>

      {/* <FormControl isRequired>
        <FormControl.Label>Foto</FormControl.Label>
        <Input/>
      </FormControl> */}

      <FormControl isRequired>
        <FormControl.Label>CEP</FormControl.Label>
        <Input placeholder="CEP" />
      </FormControl>
      <FormControl isRequired>
        <FormControl.Label>Rua</FormControl.Label>
        <Input placeholder="Rua" />
      </FormControl>
      <FormControl isRequired>
        <FormControl.Label>Número</FormControl.Label>
        <Input placeholder="Número da rua" />
      </FormControl>
      <FormControl isRequired>
        <FormControl.Label>Estado</FormControl.Label>
        <Input placeholder="Estado" />
      </FormControl>
      <FormControl isRequired>
        <FormControl.Label>Cidade</FormControl.Label>
        <Input placeholder="Cidade" />
      </FormControl>

      <Button>Entrar</Button>
    </Box>
  );
};

export default Component;
