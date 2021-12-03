import React, { FC } from 'react';
import { Heading } from 'native-base';

interface Props {
  tintColor?: string;
}
const component: FC<Props> = ({ tintColor }: Props) => {
  return <Heading color={tintColor}>Bike Turismo</Heading>;
};

export default component;
