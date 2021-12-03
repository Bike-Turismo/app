import React from 'react';

import { IUserAuth, Unsubscribe } from 'utils/firebase/auth/types';

export interface IState {
  isUserDataPresent: boolean;
  user: IUserAuth | null;
  listener: Unsubscribe | null;
}

export interface AuthContextData {
  user?: IUserAuth | null;
  isUserDataPresent: boolean;
  signOut: () => void;
  signIn: () => Promise<void>;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}

export interface IUseLogicReturn {
  signIn: () => Promise<void>;
  signOut: () => void;
  authState: IState;
}
