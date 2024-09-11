import { Text, View } from "react-native"
import { PlayIcon } from "../IconButton"
import { icons } from "../../Utils/Images"
import IoniconsIcon from "../IoniconButton"
import styles from "./style"

function PlayCard() {
    return (
        <View>
            <View style={styles.rootContainer}>
                <View>
                    <PlayIcon image={icons.dummyIcon} />
                </View>
                <View>
                    <Text style={styles.titleStyle}>Alone</Text>
                    <View style={styles.containerStyle}>
                        <Text style={styles.textStyles}>Lyrics</Text>
                        <Text style={{ color: 'white' }}>Alan Walker</Text>
                    </View>
                </View>
                <View style={styles.iconStyles}>
                    <IoniconsIcon name="ellipsis-vertical-outline" color="white" />
                </View>
            </View>

        </View>
    )
}
export default PlayCard