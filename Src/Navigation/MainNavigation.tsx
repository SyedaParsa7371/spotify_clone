import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTabNavigation from './BottomNavigation';
import AuthNavigation from './AuthNavigation';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();
const MainNavigation = () => {
  const authState = useSelector((state: any) => state.Authentication);
  console.log('Auh state', authState);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!authState.loggedin ? (
          <Stack.Screen
            name="AuthNavigation"
            component={AuthNavigation}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="HomeScreen"
            component={BottomTabNavigation}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigation;
