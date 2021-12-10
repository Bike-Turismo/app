import { Component, ComponentSmall } from './component';
import useController from './controller';
import { PropsExternal } from './types';

export default (props: PropsExternal) => useController(Component, ComponentSmall, props);
