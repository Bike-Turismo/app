/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react';
import { Box, Heading } from 'native-base';
import { Maps, MapsRouteInfo } from 'components';
import { Props } from './types';

const Component: FC<Props> = ({ routeModel, localizationModel, positionsCoords }: Props) => {
  return (
    <Box h="100%" w="100%">
      <Box>
        <Heading textAlign="center" size="md">
          {routeModel.name} - {localizationModel.toString()}
        </Heading>
      </Box>
      <MapsRouteInfo routeModel={routeModel} />
      <Maps positionsCoords={positionsCoords} />
    </Box>
  );
};

export default Component;
