import {
  TypedNavigator,
  ParamListBase,
  StackNavigationState,
  NativeStackNavigationOptions,
  NativeStackNavigatorProps,
  NativeStackNavigationEventMap,
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

export type AuthStackParamList = {
  SignIn: undefined;
};

export type AppStackParamList = {
  HomeScreen: undefined;
};

export type RootStackParamList = AuthStackParamList & AppStackParamList;
