import {
  TypedNavigator,
  ParamListBase,
  StackNavigationState,
  NativeStackNavigationOptions,
  NativeStackNavigatorProps,
  NativeStackNavigationEventMap,
  ScreenOptions,
} from '@react-navigation/core';
import LocalizationModel from 'models/localization';
import RouteModel from 'models/route';

export interface PropsGroup {
  Stack: TypedNavigator<
    ParamListBase,
    StackNavigationState<ParamListBase>,
    NativeStackNavigationOptions,
    NativeStackNavigationEventMap,
    ({ initialRouteName, children, screenListeners, screenOptions, ...rest }: NativeStackNavigatorProps) => JSX.Element
  >;
}

export interface PropsGroupAuth extends PropsGroup {
  screenOptionsBase: ScreenOptions;
}

export type AuthStackParamList = {
  SignIn: undefined;
};

export type AppStackParamList = {
  Home: undefined;
  Route: {
    routeModel: RouteModel;
    localizationModel: LocalizationModel;
  };
};

export type RootStackParamList = AuthStackParamList & AppStackParamList;
