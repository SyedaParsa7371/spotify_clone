import { Text, View } from "react-native"
import Button from "../../../Components/Button"
import styles from "./style"
function Login() {
    return (
        <View style={styles.rootContainer}>
            <View  style={styles.container}>
                <View>
                    <Text style={styles.text}>Millions Of Songs</Text>
                    <Text style={styles.text}>Free On Spotify</Text>
                </View>

            <View style={styles.buttons}>

           
            
            <Button >SignUp Screen</Button>
          
            <Button>Continue WithPhone Number</Button>
            <Button>Continue With Google</Button>
            <Button>Continue with FaceBook</Button>
            </View>
            </View>
        </View>
    )
}
export default Login