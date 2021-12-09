import {
  TypedNavigator,
  ParamListBase,
  StackNavigationState,
  NativeStackNavigationOptions,
  NativeStackNavigatorProps,
  NativeStackNavigationEventMap,
  ScreenOptions,
} from '@react-navigation/core';

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
  Route: undefined;
};

export type RootStackParamList = AuthStackParamList & AppStackParamList;
