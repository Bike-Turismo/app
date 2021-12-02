import RouteModel from 'models/route';

export interface PropsExternal {
  route: RouteModel;
}

export interface Props {
  previewURL: string;
  name: string;
  distanceInKiloMeters: number;
  description: string;
  handleOnPressShowRoute(): void;
}
