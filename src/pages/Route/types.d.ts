import LocalizationModel from 'models/localization';
import RouteModel, { RouteDifficulties } from 'models/route';

export interface Props {
  name: string;
  localizationModel: LocalizationModel;
  difficulty: RouteDifficulties;
  elevation: number;
  distanceInKilometers: number;
}

export interface PropsExternal {
  route: {
    params: {
      routeModel: RouteModel;
      localizationModel: LocalizationModel;
    };
  };
}
