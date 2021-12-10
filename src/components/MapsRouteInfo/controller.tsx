import { IRoute } from 'models/route';
import React, { FC, useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import { Props, PropsExternal } from './types';

const useController = (Component: FC<Props>, ComponentSmall: FC<Props>, { routeModel }: PropsExternal) => {
  const windowWidth = Dimensions.get('window').width;

  if (windowWidth < 300) {
    return <ComponentSmall />;
  }

  return <Component />;
};

export default useController;
