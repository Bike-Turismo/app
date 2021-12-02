/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react';
import {
  Box,
  Button,
  Input,
  Flex,
  Text,
  Heading,
  AspectRatio,
  Image,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
} from 'native-base';
import { Props } from './types';

export const Example = () => {
  return (
    <Flex direction="row" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" maxH="180px">
      <Box>
        <AspectRatio w="115px" h="115px" ratio={4 / 4}>
          <Image
            source={{
              uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
            }}
            alt="image"
          />
        </AspectRatio>
      </Box>
      <Stack flex={1} p="1" px="3" space={1}>
        <Heading size="md" ml="-1">
          Trilha X
        </Heading>
        <Text
          fontSize="xs"
          _light={{
            color: 'violet.500',
          }}
          _dark={{
            color: 'violet.400',
          }}
          fontWeight="500"
          ml="-0.5"
          mt="-1"
        >
          10 KM
        </Text>
        <Text flex={1} fontSize="xs" numberOfLines={2} ellipsizeMode="tail">
          Conheça as maravilhas do centro norte até a Universidade Tecnológica Federal do Paraná campus Dois Vizinhos.
        </Text>
        <Text textAlign="right" fontSize="sm">
          Ver
        </Text>
      </Stack>
    </Flex>
  );
};

const Component: FC<Props> = ({ cityState: [city, handleOnChangeCity], handleOnSubmitSearch, routes }: Props) => {
  return (
    <Box margin="auto" w="90%" maxWidth="450px">
      <Text alignSelf="center" textAlign="center" fontSize="4xl">
        Encontre a trilha {'\n'} perfeita!
      </Text>
      <Flex mt="80px" direction="row">
        <Input flex={1} mr="20px" value={city} onChangeText={handleOnChangeCity} placeholder="Nome da cidade" />
        <Button alignSelf="center" onPress={handleOnSubmitSearch}>
          Pesquisar
        </Button>
      </Flex>
      {routes.map(route => (
        <Example />
      ))}
    </Box>
  );
};

export default Component;
