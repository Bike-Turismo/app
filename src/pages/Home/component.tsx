/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react';
import { Box, Button, Input, Flex, Text, Stack, ScrollView, PresenceTransition } from 'native-base';
import ItemRoute from 'components/ItemRoute';
import { Props } from './types';

const Component: FC<Props> = ({
  cityState: [city, handleOnChangeCity],
  isSearching,
  handleOnFocusCity,
  handleOnBlurCity,
  handleOnSubmitSearch,
  routes,
}: Props) => {
  return (
    <ScrollView>
      <Flex direction="column">
        <Box mb="20px" alignSelf="center" w="90%" maxWidth="600px">
          <PresenceTransition
            visible={!isSearching}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 200,
              },
            }}
          >
            <Text mt="80px" mb="60px" alignSelf="center" textAlign="center" fontSize="4xl">
              Encontre a trilha {'\n'} perfeita!
            </Text>
          </PresenceTransition>

          <Flex mt="20px" direction="row">
            <Input
              flex={1}
              mr="20px"
              value={city}
              onFocus={handleOnFocusCity}
              onBlur={handleOnBlurCity}
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
