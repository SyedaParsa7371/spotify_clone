import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../Screens/Home"
import PlayListScreen from "../Screens/PlayList"

const Stack = createNativeStackNavigator()

function HomePlaylistScreenStack() {
    return(
        <Stack.Navigator>
        <Stack.Screen name="Home screen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Play List Screen" component={PlayListScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default HomePlaylistScreenStack