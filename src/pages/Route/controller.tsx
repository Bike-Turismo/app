import React, { FC } from 'react';
import { Props, PropsExternal } from './types';

const useController = (
  Component: FC<Props>,
  {
    route: {
      params: { routeModel, localizationModel },
    },
  }: PropsExternal,
) => {
  const { name, difficulty, elevation, distanceInKilometers } = routeModel.toJSON();
  if (difficulty !== undefined && distanceInKilometers !== undefined && name !== undefined && elevation !== undefined) {
    return (
      <Component
        name={name}
        difficulty={difficulty}
        elevation={elevation}
        distanceInKilometers={distanceInKilometers}
        localizationModel={localizationModel}
      />
    );
  }

  return null;
};

export default useController;
