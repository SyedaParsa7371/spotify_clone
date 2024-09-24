
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';

import SplashScreen from 'react-native-splash-screen';


import { Provider } from 'react-redux';

import { persistor, store } from './Src/Utils/Store/redux/store';
import MainNavigation from './Src/Navigation/MainNavigation';
import { PersistGate } from 'redux-persist/integration/react';

const Stack = createNativeStackNavigator()

function App() {
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <MainNavigation/>
      </PersistGate>
     
    </Provider>
  )
}



export default App;
