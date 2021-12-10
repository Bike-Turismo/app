import React, { FC, useEffect, useState } from 'react';
import PositionsModel, { ICoord } from 'models/positions';
import PositionsRepository from 'repositories/positions';
import AppError from 'errors/app-error';
import { Props, PropsExternal } from './types';

function getRoutePositions(routePath: string) {
  const routerRepository = new PositionsRepository();
  return routerRepository.getAllPositionsFromRoute(routePath);
}

function getAllCoordsFromPositions(positionsFromRoute: PositionsModel[]) {
  const coords = positionsFromRoute.flatMap(positionsModel => positionsModel.positions || []);
  return coords;
}

const useController = (
  Component: FC<Props>,
  {
    route: {
      params: { routeModel, localizationModel },
    },
  }: PropsExternal,
) => {
  const [isLoadingPositions, setIsLoadingPositions] = useState(false);
  const [positionsCoords, setPositionsCoords] = useState<Array<ICoord>>([]);
  const { name, difficulty, elevation, distanceInKilometers } = routeModel.toJSON();

  useEffect(() => {
    const getResources = async () => {
      try {
        if (!routeModel.path) {
          throw new AppError('Route path undefined');
        }

        setIsLoadingPositions(true);
        const positionsFromRoute = await getRoutePositions(routeModel.path);
        const coords = getAllCoordsFromPositions(positionsFromRoute);
        setPositionsCoords(coords);
      } catch (error) {
        console.error(error);
      }
      setIsLoadingPositions(false);
    };

    getResources();
  }, [routeModel]);

  if (
    routeModel.path &&
    difficulty !== undefined &&
    distanceInKilometers !== undefined &&
    name !== undefined &&
    elevation !== undefined
  ) {
    return (
      <Component positionsCoords={positionsCoords} routeModel={routeModel} localizationModel={localizationModel} />
    );
  }

  return null;
};

export default useController;
