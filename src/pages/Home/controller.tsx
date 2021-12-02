import { IRoute } from 'models/route';
import React, { FC, useState } from 'react';
import { ICityState, Props } from './types';

const useController = (Component: FC<Props>) => {
  const [city, setCity] = useState('');
  const [routes, setRoutes] = useState<Array<IRoute>>([{ name: '' }, { name: '' }, { name: '' }]);

  const cityState: ICityState = [city, (v: string) => setCity(v)];

  const handleOnSubmitSearch = () => {
    console.log('envio');
  };

  return <Component handleOnSubmitSearch={handleOnSubmitSearch} cityState={cityState} routes={routes} />;
};

export default useController;
