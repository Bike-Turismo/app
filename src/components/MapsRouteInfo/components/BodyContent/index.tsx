/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react';
import { Button, Heading, Text } from 'native-base';
import RouteModel from 'models/route';

interface Props {
  isHeaderShown?: boolean;
  routeModel: RouteModel;
}

const Component: FC<Props> = ({ isHeaderShown = false, routeModel }: Props) => {
  return (
    <>
      {isHeaderShown && <Heading size="md">Dados da trilha</Heading>}
      <Text>Dificuldade: {routeModel.difficultyInPtBr()}</Text>
      <Text>Elevação: {routeModel.elevation} m</Text>
      <Text>Tamanho: {routeModel.distance_in_kilometers} km</Text>
      <Button colorScheme="info">Compartilhar</Button>
    </>
  );
};

export default Component;
