import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/Home';
import PlayListScreen from '../Screens/PlayList';
import MusicPlayerScreen from '../Screens/MusicPlayer';
import { BackIcon } from '../Components/IconButton';

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
        options={props => ({
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => (
            <BackIcon
              source={image.back}
              
              onPress={() => props?.navigation?.goBack()}
            />
          ),
        })}
        
      />
      {/* <Stack.Screen name="Music Player Screen" component={MusicPlayerScreen} /> */}
      <Stack.Screen
        name="Music Player Screen"
        component={MusicPlayerScreen}
        options={{
          presentation:'modal',
           headerTitleAlign: 'center',
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
