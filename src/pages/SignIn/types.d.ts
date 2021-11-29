export interface IInputStates {
  emailState: [string, (v: string) => void];
  passwordState: [string, (v: string) => void];
}

export interface Props {
  inputStates: IInputStates;
  handleOnSubmit(): void;
  handleOnClickGoogleLogIn(): void;
}
