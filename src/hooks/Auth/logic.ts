import { useEffect, useState } from 'react';
import { googleSignIn, onAuthStateChanged, signOut as signOutCallback } from 'utils/firebase';
import { IState, IUseLogicReturn } from './types';

const initialState = {
  isUserDataPresent: false,
  user: null,
  listener: null,
};

function useLogic(): IUseLogicReturn {
  const [authState, setAuthState] = useState<IState>(initialState);

  useEffect(() => {
    setAuthState(oldAuthState => {
      if (!oldAuthState.listener) {
        const listener = onAuthStateChanged(user => {
          setAuthState(oldState => ({
            ...oldState,
            isUserDataPresent: true,
            user,
          }));
        });

        return {
          ...oldAuthState,
          listener,
        };
      }

      return oldAuthState;
    });

    return () => {
      setAuthState(oldAuthState => {
        oldAuthState?.listener?.();
        return { ...initialState };
      });
    };
  }, []);

  const signIn = (): Promise<void> => {
    return googleSignIn();
  };

  const signOut = (): void => {
    signOutCallback();
    setAuthState(initialState);
  };

  return { signIn, signOut, authState };
}

export default useLogic;
