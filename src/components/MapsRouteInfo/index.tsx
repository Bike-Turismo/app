import { MapsRouteInfo, MapsRouteInfoSmall } from './components/MapsRouteInfo';
import useController from './controller';
import { PropsExternal } from './types';

export default (props: PropsExternal) => useController(MapsRouteInfo, MapsRouteInfoSmall, props);
