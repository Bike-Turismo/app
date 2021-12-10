import LocalizationModel from 'models/localization';
import RouteModel from 'models/route';

export interface Props {
  routeModel: routeModel;
  localizationModel: LocalizationModel;
  positionsCoords: ICoord[];
}

export interface PropsExternal {
  route: {
    params: {
      routeModel: RouteModel;
      localizationModel: LocalizationModel;
    };
  };
}
