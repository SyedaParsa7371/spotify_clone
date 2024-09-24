import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import IntialScreen from "../Screens/Auth/IntialScreen"
import SignUp from "../Screens/Auth/SignUp"
import Login from "../Screens/Auth/Login"


const Stack = createNativeStackNavigator()
const AuthNavigation=()=>{
return (

 

      <Stack.Navigator>
        <Stack.Screen name="IntialScreen" component={IntialScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    
      </Stack.Navigator>

 
)
}
export default AuthNavigation