import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'routes/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Props, PropsExternal } from './types';

const useController = (Component: FC<Props>, { routeModel, localizationModel }: PropsExternal) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { description, distanceInKilometers, name, previewURL } = routeModel.toJSON();

  const handleOnPressShowRoute = () => {
    navigation.navigate('Route', { routeModel, localizationModel });
  };

  if (
    description !== undefined &&
    distanceInKilometers !== undefined &&
    name !== undefined &&
    previewURL !== undefined
  ) {
    return (
      <Component
        description={description}
        distanceInKilometers={distanceInKilometers}
        name={name}
        previewURL={previewURL}
        handleOnPressShowRoute={handleOnPressShowRoute}
      />
    );
  }

  return null;
};

export default useController;
