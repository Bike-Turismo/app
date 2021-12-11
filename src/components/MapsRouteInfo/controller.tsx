import { useBreakpointValue } from 'native-base';
import React, { FC } from 'react';
import { Props, PropsExternal } from './types';

const useController = (Component: FC<Props>, ComponentSmall: FC<Props>, { routeModel }: PropsExternal) => {
  const isScreenSmall = useBreakpointValue({
    sm: false,
    base: true,
  });

  if (isScreenSmall) {
    return <ComponentSmall routeModel={routeModel} />;
  }

  return <Component routeModel={routeModel} />;
};

export default useController;
