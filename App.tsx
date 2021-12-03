import React, { FC } from 'react';
import { NativeBaseProvider } from 'native-base';
import Routes from 'routes';
import AppProvider from 'hooks';

const App: FC = () => {
  return (
    <AppProvider>
      <NativeBaseProvider>
        <Routes />
      </NativeBaseProvider>
    </AppProvider>
  );
};

export default App;
