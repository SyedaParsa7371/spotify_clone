import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/Home';
import PlayListScreen from '../Screens/PlayList';
import MusicPlayerScreen from '../Screens/MusicPlayer';
import { BackIcon } from '../Components/IconButton';
import { icons } from '../Utils/Images';

const Stack = createStackNavigator();

function HomePlaylistScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home screen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Play List Screen"
        component={PlayListScreen}
        options={{
          headerTransparent: true,
          headerShown: true,
        
        }}
        
      />
  
      <Stack.Screen
        name="Music Player Screen"
        component={MusicPlayerScreen}
        options={{
          presentation:'modal',
           headerTitleAlign: 'center',
           headerTransparent: true,
           headerShown: true,
          headerStyle: {
            backgroundColor: '#646666',
          },
          headerTintColor: '#fff', 
        }}
      />
    </Stack.Navigator>
  );
}

export default HomePlaylistScreenStack;
