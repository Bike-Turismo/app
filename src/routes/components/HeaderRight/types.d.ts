export interface PropsExternal {
  tintColor?: string;
}
export interface Props extends PropsExternal {
  handleOnPressAction(): void;
  textPressable: string;
  isLoading: boolean;
}
