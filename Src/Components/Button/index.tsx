import { FC } from "react"
import { Image, Text, View } from "react-native"
import { IButton } from "../../Utils/Interface"
import styles from "./style";

const Buttons:FC<IButton>=({children})=>{
return (
    <View>
        <View style={styles.RootContainer}>
            <View>
                <Text style={styles.Text}>{children}</Text>
            </View>
        </View>
    </View>
)
}
export default Buttons