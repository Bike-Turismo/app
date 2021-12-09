import RouteModel from 'models/route';

export interface PropsExternal {
  routeModel: RouteModel;
  localizationModel: localizationModel;
}

export interface Props {
  previewURL: string;
  name: string;
  distanceInKilometers: number;
  description: string;
  handleOnPressShowRoute(): void;
}
