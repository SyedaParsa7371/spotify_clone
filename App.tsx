
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';

import SplashScreen from 'react-native-splash-screen';
import Login from './Src/Screens/Auth/IntialScreen';
import IntialScreen from './Src/Screens/Auth/IntialScreen';

const Stack = createNativeStackNavigator()

function App(){
useEffect(()=>{
SplashScreen.hide()
},[])
return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="IntialScreen" component={IntialScreen}  options={{ headerShown: false }} />
    </Stack.Navigator>

  </NavigationContainer>
)
}



export default App;
