import { FC } from "react"
import { IButton } from "../../Utils/Interface"
import { View, TouchableOpacity, Text } from "react-native"
import styles from "./style"


export const ButtonImage: FC<IButton> = ({ children,onPress }) => {
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