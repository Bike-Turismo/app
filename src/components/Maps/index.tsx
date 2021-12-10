/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Polyline } from '@react-google-maps/api';
import config from 'utils/config';
import { Props } from './types';

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

const Component: FC<Props> = ({ positionsCoords }: Props) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: config.MAPS_API_KEY,
  });

  const onLoad = useCallback((map: google.maps.Map) => {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
  }, []);

  if (isLoaded && positionsCoords.length > 0) {
    return (
      <GoogleMap
        options={{ fullscreenControl: false }}
        mapContainerStyle={mapContainerStyle}
        center={positionsCoords[0]}
        onLoad={onLoad}
        zoom={12}
      >
        <Polyline path={positionsCoords} />
      </GoogleMap>
    );
  }

  return null;
};

export default Component;
