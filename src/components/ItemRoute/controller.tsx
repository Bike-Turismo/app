import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'routes/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Props, PropsExternal } from './types';

const useController = (Component: FC<Props>, { route }: PropsExternal) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const { description, distanceInKiloMeters, name, previewURL } = route.toJSON();

  const handleOnPressShowRoute = () => {
    // navigation.navigate('SignIn');
  };

  if (
    description !== undefined &&
    distanceInKiloMeters !== undefined &&
    name !== undefined &&
    previewURL !== undefined
  ) {
    return (
      <Component
        description={description}
        distanceInKiloMeters={distanceInKiloMeters}
        name={name}
        previewURL={previewURL}
        handleOnPressShowRoute={handleOnPressShowRoute}
      />
    );
  }

  return null;
};

export default useController;
