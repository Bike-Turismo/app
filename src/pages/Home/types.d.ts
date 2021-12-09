import LocalizationModel from 'models/localization';
import RouteModel from 'models/route';

export type ICityState = [string, (v: string) => void];

export interface Props {
  handleOnSubmitSearch(): void;
  isSearching: boolean;
  cityState: ICityState;
  routeModels: Array<RouteModel>;
  routesHeading: string;
  localizationsAvailable: Array<LocalizationModel>;
  handleOnPressLocalization(localization: LocalizationModel): void;
  handleOnIsFocusCity(value: boolean): void;
  isLoadingLocalizations: boolean;
  isLoadingRoutes: boolean;
  currentLocalization: LocalizationModel | null;
}
