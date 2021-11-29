import React, { FC } from 'react';
import { NativeBaseProvider } from 'native-base';
import Routes from 'routes';

const App: FC = () => {
  return (
    <NativeBaseProvider>
      <Routes />
    </NativeBaseProvider>
  );
};

export default App;
