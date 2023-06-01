import React from 'react';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import Navigator from './navigation/navigator';
import { Provider } from 'react-redux';
import { store } from 'store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <Navigator />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
