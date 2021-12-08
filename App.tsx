import React, { FC } from 'react';
import { extendTheme, NativeBaseProvider } from 'native-base';
import Routes from 'routes';
import AppProvider from 'hooks';

const App: FC = () => {
  const theme = extendTheme({
    colors: {
      superLight: {
        50: '#fafaf9',
        100: '#f5f5f4',
        200: '#e7e5e4',
        300: '#e7e5e4',
        400: '#e7e5e4',
        500: '#e7e5e4',
        600: '#c4bcb8',
        700: '#e7e5e4',
        800: '#e7e5e4',
        900: '#e7e5e4',
      },
    },
  });

  return (
    <AppProvider>
      <NativeBaseProvider theme={theme}>
        <Routes />
      </NativeBaseProvider>
    </AppProvider>
  );
};

export default App;
