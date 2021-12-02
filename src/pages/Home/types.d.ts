import RouteModel from 'models/route';

export type ICityState = [string, (v: string) => void];

export interface Props {
  handleOnSubmitSearch(): void;
  cityState: ICityState;
  routes: Array<RouteModel>;
}
