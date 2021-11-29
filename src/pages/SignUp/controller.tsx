import React, { FC } from 'react';
import { Props } from './types';

const useController = (Component: FC<Props>) => {
  return <Component />;
};

export default useController;
