import React, { FC } from 'react';

import { Dimensions } from 'react-native';
import { Props, PropsExternal } from './types';

const windowWidth = Dimensions.get('window').width;

const useController = (Component: FC<Props>, ComponentSmall: FC<Props>, { routeModel }: PropsExternal) => {
  if (windowWidth < 500) {
    return <ComponentSmall routeModel={routeModel} />;
  }

  return <Component routeModel={routeModel} />;
};

export default useController;
