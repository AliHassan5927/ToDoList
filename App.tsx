import React from 'react';
import { MenuProvider } from 'react-native-popup-menu';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from 'src/navigations';


const App = () => {
  return (
    <SafeAreaProvider>
      <MenuProvider>
        <Navigation />
      </MenuProvider>
    </SafeAreaProvider>
  );
};

export default App;
