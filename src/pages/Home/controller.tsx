import LocalizationModel from 'models/localization';
import RouteModel from 'models/route';
import React, { FC, useCallback, useEffect, useState } from 'react';
import LocalizationRepository from 'repositories/localization';
import RouteRepository from 'repositories/route';
import { ICityState, Props } from './types';

function getRoutes(city: string) {
  const routerRepository = new RouteRepository();
  const routeModel = new RouteModel({ name: city });

  return routerRepository.getRoutesByCity(routeModel);
}

function getLocations() {
  const routerRepository = new LocalizationRepository();
  return routerRepository.getAllLocations();
}

function filterLocalizations(localization: LocalizationModel, city: string) {
  const localizationInUpperString = localization.toString().toUpperCase();
  const inputCityUpperText = city.toUpperCase();
  const isThisLocalizationMatch = localizationInUpperString.includes(inputCityUpperText);

  return isThisLocalizationMatch;
}

const useController = (Component: FC<Props>) => {
  const [isLoading, setIsLoading] = useState(true);
  const [localizationsAvailable, setLocalizationsAvailable] = useState<Array<LocalizationModel>>([]);
  const [localizationsFiltered, setLocalizationsFiltered] = useState<Array<LocalizationModel>>([]);
  const [currentLocalization, setCurrentLocalization] = useState<LocalizationModel | null>(null);
  const [isLocalizationSelected, setIsLocalizationSelected] = useState(false);
  const [city, setCity] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [routes, setRoutes] = useState<Array<RouteModel>>([]);
  const [routesHeading, setRoutesHeading] = useState('');

  const cityState: ICityState = [city, (v: string) => setCity(v)];

  useEffect(() => {
    !isLocalizationSelected &&
      setLocalizationsFiltered(() => {
        if (city) {
          const newLocalizations = localizationsAvailable.filter(localization =>
            filterLocalizations(localization, city),
          );
          return newLocalizations;
        }
        return [];
      });
  }, [city, localizationsAvailable, isLocalizationSelected]);

  useEffect(() => {
    const getResources = async () => {
      try {
        const locations = await getLocations();
        setLocalizationsAvailable(locations);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getResources();
  }, []);

  const handleOnIsFocusCity = (isFocus: boolean) => {
    setIsLocalizationSelected(!isFocus);
  };

  const handleOnPressLocalization = (localization: LocalizationModel) => {
    setIsLocalizationSelected(true);
    setLocalizationsFiltered([]);
    setCity(localization.toString());
  };

  const handleOnSubmitSearch = useCallback(() => {
    const getResources = async () => {
      try {
        const newRoutes = await getRoutes(city);
        newRoutes && setRoutes(newRoutes);
        setIsSearching(true);
        setRoutesHeading(`Trilhas em ${city}`);
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
      localizationsAvailable={localizationsFiltered}
      handleOnPressLocalization={handleOnPressLocalization}
      handleOnIsFocusCity={handleOnIsFocusCity}
    />
  );
};

export default useController;
