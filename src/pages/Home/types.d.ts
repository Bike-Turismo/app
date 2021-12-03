import RouteModel from 'models/route';

export type ICityState = [string, (v: string) => void];

export interface Props {
  handleOnSubmitSearch(): void;
  isSearching: boolean;
  cityState: ICityState;
  routes: Array<RouteModel>;
  routesHeading: string;
}
