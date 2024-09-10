import { FC } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { IButton } from "../../Utils/Interface"
import styles from "./style";

const Buttons: FC<IButton> = ({ children, image, onPress, }) => {
    return (
        <View>
            <View style={styles.RootContainer}>
                <View>
                    <TouchableOpacity onPress={onPress}>
                        <View style={styles.buttonContainer}>
                            <View >
                                <Image style={styles.images} source={image} />
                            </View>
                            <Text style={styles.Text}>{children}</Text>
                        </View>

                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default Buttons

export const ButtonsSignUp: FC<IButton> = ({ children,onPress }) => {
    return (
        <View>
            <View style={styles.buttonSignup} >
                <View>
                    <TouchableOpacity onPress={onPress}><Text style={styles.TextSign}>{children}</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export const ButtonsLogin: FC<IButton> = ({ children,onPress }) => {
    return (
        <View>
            <View style={styles.buttonlogin}>
                <View>
                    <TouchableOpacity onPress={onPress}>
                        <Text style={styles.textlogin}>{children}</Text>
                        </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export const ButtonsLoginss: FC<IButton> = ({ children,onPress }) => {
    return (
        <View>
            <View style={styles.buttonlogins}>
                <View>
                    <TouchableOpacity onPress={onPress}>
                        <Text style={styles.textlogins}>{children}</Text>
                        </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export const ButtonsSignUps: FC<IButton> = ({ children,onPress }) => {
    return (
        <View>
            <View style={styles.buttonSignups} >
                <View>
                    <TouchableOpacity onPress={onPress}><Text style={styles.TextSigns}>{children}</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}