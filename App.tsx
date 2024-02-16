import React from 'react';
import { LogBox } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Navigation from 'src/navigations';
import store from 'src/redux';


const App = () => {
  LogBox.ignoreAllLogs()
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <MenuProvider>
          <Navigation />
        </MenuProvider>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
