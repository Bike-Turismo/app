import RouteModel from 'models/route';
import React, { FC, useCallback, useState } from 'react';
import RouteRepository from 'repositories/route';
import { ICityState, Props } from './types';

function getRoutes(city: string) {
  const routerRepository = new RouteRepository();
  const routeModel = new RouteModel({ name: city });
  return routerRepository.getRoutesByCity(routeModel);
}

const useController = (Component: FC<Props>) => {
  const [city, setCity] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [routes, setRoutes] = useState<Array<RouteModel>>([]);
  const [routesHeading, setRoutesHeading] = useState('');

  const cityState: ICityState = [city, (v: string) => setCity(v)];

  const handleOnSubmitSearch = useCallback(() => {
    const getResources = async () => {
      try {
        const newRoutes = await getRoutes(city);
        newRoutes && setRoutes(newRoutes);
        setIsSearching(true);
        const citye = 'Dois Vizinhos';
        const state = 'PR';
        setRoutesHeading(`Trilhas em ${citye}, ${state}`);
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
      cityState={cityState}
      routes={routes}
      routesHeading={routesHeading}
    />
  );
};

export default useController;
