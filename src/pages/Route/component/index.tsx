/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react';
import { Box, Heading } from 'native-base';
import GoogleMapReact from 'google-map-react';
import config from 'utils/config';
import { Props } from '../types';

// const AnyReactComponent = ({ text, lat, lng }) => (
//   <Box w="100px" bg="blue" bgColor="blue.100">
//     {text}
//   </Box>
// );

const Component: FC<Props> = ({ name, localizationModel, difficulty, distanceInKilometers, elevation }: Props) => {
  return (
    <Box h="100%" w="100%">
      <Box>
        <Heading textAlign="center" size="md">
          {name} - {localizationModel.toString()}
        </Heading>
      </Box>
      <GoogleMapReact
        options={{ fullscreenControl: false }}
        bootstrapURLKeys={{ key: config.MAPS_API_KEY }}
        defaultCenter={{ lat: 59.955413, lng: 30.337844 }}
        defaultZoom={12}
      >
        {/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" /> */}
      </GoogleMapReact>
    </Box>
  );
};

export default Component;
