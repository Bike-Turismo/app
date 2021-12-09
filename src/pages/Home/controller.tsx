import AppError from 'errors/app-error';
import LocalizationModel from 'models/localization';
import RouteModel from 'models/route';
import React, { FC, useCallback, useEffect, useState } from 'react';
import LocalizationRepository from 'repositories/localization';
import RouteRepository from 'repositories/route';
import { ICityState, Props } from './types';

function getRoutes(routeId: string) {
  const routerRepository = new RouteRepository();
  const routeModel = new RouteModel({ id: routeId });

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
  const [isLoadingLocalizations, setIsLoadingLocalizations] = useState(false);
  const [isLoadingRoutes, setIsLoadingRoutes] = useState(false);
  const [localizationsAvailable, setLocalizationsAvailable] = useState<Array<LocalizationModel>>([]);
  const [localizationsFiltered, setLocalizationsFiltered] = useState<Array<LocalizationModel>>([]);
  const [currentLocalization, setCurrentLocalization] = useState<LocalizationModel | null>(null);
  const [isLocalizationSelected, setIsLocalizationSelected] = useState(false);
  const [city, setCity] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [routeModels, setRouteModels] = useState<Array<RouteModel>>([]);
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
        setIsLoadingLocalizations(true);
        const locations = await getLocations();
        setLocalizationsAvailable(locations);
      } catch (error) {
        console.error(error);
      }
      setIsLoadingLocalizations(false);
    };

    getResources();
  }, []);

  const handleOnIsFocusCity = (isFocus: boolean) => {
    setIsLocalizationSelected(!isFocus);
    if (isFocus) {
      setRouteModels([]);
      setRoutesHeading('');
    }
    if (!isFocus) {
      new Promise(r => {
        setTimeout(r, 200);
      }).then(() => setLocalizationsFiltered([]));
    }
  };

  const handleOnPressLocalization = (localization: LocalizationModel) => {
    setIsLocalizationSelected(true);
    setCurrentLocalization(localization);
    setCity(localization.toString());
  };

  const handleOnSubmitSearch = useCallback(() => {
    const getResources = async () => {
      try {
        if (!currentLocalization || !currentLocalization.id) {
          throw new AppError('Localization undefined');
        }
        setIsLoadingRoutes(true);
        const newRoutes = await getRoutes(currentLocalization.id);
        if (newRoutes.length > 0) {
          newRoutes && setRouteModels(newRoutes);
          setIsSearching(true);
          setRoutesHeading(`Trilhas em ${currentLocalization.toString()}`);
        } else {
          setRoutesHeading(`Nenhuma trilha encontrada em ${currentLocalization.toString()}`);
        }
      } catch (error) {
        console.error(error);
      }
      setIsLoadingRoutes(false);
    };

    getResources();
  }, [currentLocalization]);

  return (
    <Component
      handleOnSubmitSearch={handleOnSubmitSearch}
      isSearching={isSearching}
      cityState={cityState}
      routeModels={routeModels}
      routesHeading={routesHeading}
      localizationsAvailable={localizationsFiltered}
      handleOnPressLocalization={handleOnPressLocalization}
      handleOnIsFocusCity={handleOnIsFocusCity}
      isLoadingLocalizations={isLoadingLocalizations}
      isLoadingRoutes={isLoadingRoutes}
      currentLocalization={currentLocalization}
    />
  );
};

export default useController;
