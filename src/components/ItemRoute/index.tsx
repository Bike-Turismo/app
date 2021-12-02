import Component from './component';
import useController from './controller';
import { PropsExternal } from './types';

export default (Props: PropsExternal) => useController(Component, Props);
