import RouteModel from 'models/route';
import React, { FC, useCallback, useState } from 'react';
import RouteRepository from 'repositories/route';
import { ICityState, Props } from './types';

function getRoutes(city: string) {
  const routerRepository = new RouteRepository();
  const routeModel = new RouteModel({ name: city });
  return routerRepository.getRoutesByName(routeModel);
}

const useController = (Component: FC<Props>) => {
  const [city, setCity] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [routes, setRoutes] = useState<Array<RouteModel>>([]);

  const cityState: ICityState = [city, (v: string) => setCity(v)];

  const handleOnFocusCity = () => {
    setIsSearching(true);
  };

  const handleOnBlurCity = () => {
    !city && routes.length === 0 && setIsSearching(false);
  };

  const handleOnSubmitSearch = useCallback(() => {
    const getResources = async () => {
      try {
        const newRoutes = await getRoutes(city);
        newRoutes && setRoutes(newRoutes);
      } catch (error) {
        console.error(error);
      }
    };

    getResources();
  }, [city]);

  return (
    <Component
      handleOnSubmitSearch={handleOnSubmitSearch}
      isSearching={isSearching}
      handleOnFocusCity={handleOnFocusCity}
      handleOnBlurCity={handleOnBlurCity}
      cityState={cityState}
      routes={routes}
    />
  );
};

export default useController;
