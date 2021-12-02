/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react';
import { Box, Button, Input, Flex, Text, Stack, ScrollView } from 'native-base';
import ItemRoute from 'components/ItemRoute';
import { Props } from './types';

const Component: FC<Props> = ({ cityState: [city, handleOnChangeCity], handleOnSubmitSearch, routes }: Props) => {
  return (
    <ScrollView>
      <Flex mt="80px" direction="column">
        <Box mb="20px" alignSelf="center" w="90%" maxWidth="600px">
          <Text alignSelf="center" textAlign="center" fontSize="4xl">
            Encontre a trilha {'\n'} perfeita!
          </Text>
          <Flex mt="80px" direction="row">
            <Input
              flex={1}
              mr="20px"
              value={city}
              onChangeText={handleOnChangeCity}
              placeholder="Nome da cidade"
              onSubmitEditing={handleOnSubmitSearch}
            />
            <Button alignSelf="center" onPress={handleOnSubmitSearch}>
              Pesquisar
            </Button>
          </Flex>
          <Stack pt="4" space={2}>
            {routes.map(route => (
              <ItemRoute key={route.index} route={route} />
            ))}
          </Stack>
        </Box>
      </Flex>
    </ScrollView>
  );
};

export default Component;
