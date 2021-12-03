/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react';
import { Box, Button, Input, Flex, Text, Stack, ScrollView, PresenceTransition, Heading } from 'native-base';
import { ItemRoute } from 'components';
import { Props } from './types';

const Component: FC<Props> = ({
  cityState: [city, handleOnChangeCity],
  isSearching,
  handleOnSubmitSearch,
  routes,
  routesHeading,
  localizationsAvailable,
}: Props) => {
  return (
    <ScrollView>
      <Flex direction="column">
        <Box mb="20px" alignSelf="center" w="90%" maxWidth="600px">
          <PresenceTransition
            visible={!isSearching}
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 250,
              },
            }}
          >
            <Text mt="80px" mb="60px" alignSelf="center" textAlign="center" fontSize="4xl">
              Encontre a trilha {'\n'} perfeita!
            </Text>
          </PresenceTransition>

          <Flex mt="20px" direction="row">
            <Box flex={1}>
              <Input
                mr="20px"
                value={city}
                onChangeText={handleOnChangeCity}
                placeholder="Nome da cidade"
                onSubmitEditing={handleOnSubmitSearch}
              />
              {localizationsAvailable.map(localization => (
                <Text>
                  {localization.city}, {localization.state}
                </Text>
              ))}
            </Box>
            <Button mt={0} h="36px" onPress={handleOnSubmitSearch}>
              Pesquisar
            </Button>
          </Flex>
          <Heading pt="2" size="md">
            {routesHeading}
          </Heading>
          <Stack pt="1" space={2}>
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
