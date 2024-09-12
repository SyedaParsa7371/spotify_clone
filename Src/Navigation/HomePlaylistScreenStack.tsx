import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screens/Home';
import PlayListScreen from '../Screens/PlayList';
import MusicPlayerScreen from '../Screens/MusicPlayer';

const Stack = createNativeStackNavigator();

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
        options={{headerShown: false}}
      />
      {/* <Stack.Screen name="Music Player Screen" component={MusicPlayerScreen} /> */}
      <Stack.Screen
        name="Music Player Screen"
        component={MusicPlayerScreen}
        options={{
          headerShown: true,
          headerBackVisible: false, 
          headerStyle: {
            backgroundColor: '#696060',
          },
          headerTintColor: '#fff', 
        }}
      />
    </Stack.Navigator>
  );
}

export default HomePlaylistScreenStack;
