/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react';
import { Box } from 'native-base';
import RouteModel from 'models/route';
import { BodyContent } from '..';

interface Props {
  isAbsolute?: boolean;
  routeModel: RouteModel;
}

const Component: FC<Props> = ({ isAbsolute = false, routeModel }: Props) => {
  if (isAbsolute) {
    return (
      <Box
        zIndex={10}
        position="absolute"
        bgColor="#fff"
        minW="250"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        p="10px"
        _dark={{
          borderColor: 'coolGray.600',
          backgroundColor: 'gray.700',
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: 'gray.50',
        }}
      >
        <BodyContent isHeaderShown routeModel={routeModel} />
      </Box>
    );
  }

  return (
    <Box>
      <BodyContent routeModel={routeModel} />
    </Box>
  );
};

export default Component;
