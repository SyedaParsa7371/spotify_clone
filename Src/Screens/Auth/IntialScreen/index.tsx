import { Text, View } from "react-native"
import Button, { ButtonsLogin, ButtonsSignUp } from "../../../Components/Button"
import styles from "./style"
import IconButton from "../../../Components/IconButton"
import { icons } from "../../../Utils/Images"
function IntialScreen() {
    return (
        <View style={styles.rootContainer}>
            <View style={styles.imageContainer}>
                <IconButton image={icons.spottifyIcon} />
            </View>
            <View style={styles.container}>

                <View>
                    <Text style={styles.text}>Millions Of Songs</Text>
                    <Text style={styles.text}>Free On Spotify</Text>
                </View>

                <View style={styles.buttons}>
                    <ButtonsSignUp >Sign up free</ButtonsSignUp>
                    <Button image={icons.phoneIcon}>Continue with phone number</Button>
                
                    <Button image={icons.googleIcon}>Continue with Google</Button>
                    <Button image={icons.faceBook} >Continue with FaceBook</Button>
                    <ButtonsLogin >Log In</ButtonsLogin>
                </View>
            </View>
        </View>
    )
}
export default IntialScreen