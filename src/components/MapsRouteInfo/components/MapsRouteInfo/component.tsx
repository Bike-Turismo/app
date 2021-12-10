/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react';
import { ModalBody } from '..';
import { Props } from '../../types';

const Component: FC<Props> = ({ routeModel }: Props) => {
  return <ModalBody isAbsolute routeModel={routeModel} />;
};

export default Component;
