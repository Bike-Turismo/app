/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { Props } from './types';

const styles = StyleSheet.create({
  container: {
    height: '93.5%',
    width: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const Component: FC<Props> = ({ positionsCoords }: Props) => {
  if (positionsCoords.length > 0) {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: positionsCoords[0].lat,
            longitude: positionsCoords[0].lng,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <Polyline
            coordinates={positionsCoords.map(({ lat: latitude, lng: longitude }) => ({
              latitude,
              longitude,
            }))}
            strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
            strokeWidth={2}
          />
        </MapView>
      </View>
    );
  }

  return null;
};

export default Component;
