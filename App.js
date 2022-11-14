import React from 'react';
import {Provider} from 'react-redux';
import {Text} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import MainStackNavigator from './src/navigation';
import {store, persistor} from './src/redux/store';
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <MainStackNavigator />
      </PersistGate>
    </Provider>
  );
}
