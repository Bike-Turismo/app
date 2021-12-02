/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react';
import { Box, Flex, Text, Heading, AspectRatio, Image, Stack } from 'native-base';
import { Pressable } from 'react-native';
import { Props } from './types';

const Component: FC<Props> = ({
  previewURL,
  name,
  distanceInKiloMeters,
  description,
  handleOnPressShowRoute,
}: Props) => {
  return (
    <Flex direction="row" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" maxH="180px">
      <Box>
        <AspectRatio w="115px" h="115px" ratio={4 / 4}>
          <Image
            source={{
              uri: previewURL,
            }}
            alt="image"
          />
        </AspectRatio>
      </Box>
      <Stack flex={1} p="1" px="3" space={1}>
        <Heading size="md" ml="-1">
          {name}
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
          {distanceInKiloMeters} KM
        </Text>
        <Text flex={1} fontSize="xs" numberOfLines={2} ellipsizeMode="tail">
          {description}
        </Text>
        <Pressable onPress={handleOnPressShowRoute}>
          <Text textAlign="right" fontSize="sm">
            Ver
          </Text>
        </Pressable>
      </Stack>
    </Flex>
  );
};

export default Component;
