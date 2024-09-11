
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';

import SplashScreen from 'react-native-splash-screen';
import Login from './Src/Screens/Auth/Login';
import IntialScreen from './Src/Screens/Auth/IntialScreen';
import SignUp from './Src/Screens/Auth/SignUp';
import HomeScreen from './Src/Screens/Home';
import BottomTabNavigation from './Src/Navigation/BottomNavigation';
import PlayListScreen from './Src/Screens/PlayList';
import TopCard from './Src/Components/SearchTopCard';

const Stack = createNativeStackNavigator()

function App(){
useEffect(()=>{
SplashScreen.hide()
},[])
return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="IntialScreen" component={IntialScreen}  options={{ headerShown: false }} />
      <Stack.Screen name="Signup" component={SignUp} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }}/>
      <Stack.Screen name="HomeScreen" component={BottomTabNavigation} options={{ headerShown: false }}  />
    

      <Stack.Screen name="BottomNavigation" component={BottomTabNavigation}   />

    </Stack.Navigator>

  </NavigationContainer>
)
}



export default App;
