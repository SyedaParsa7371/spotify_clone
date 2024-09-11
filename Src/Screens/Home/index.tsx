import { Image, Text, View } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import IconButton, { BellIcon, HomeIcon } from "../../Components/IconButton"
import { icons } from "../../Utils/Images"
import styles from "./style"
import UserList from "../../Components/ProfileUser"
import LatestSong from "../../Components/Trending"
import RecentSong from "../../Components/Recent/index "
function HomeScreen() {
    return (
        <LinearGradient colors={['#646666','#252424','#222222', '#181616', '#1a1919']} style={{ flex: 1 }}>
            <View >
                <View style={styles.headerContainer}>
                    <View>
                        <Text style={styles.textStyles}>Made for you</Text>
                    </View>
                    <View style={styles.bellStyle}>
                        <HomeIcon image={icons.bellicon} />
                    </View>
                    <View style={styles.historyStyle}>
                        <BellIcon image={icons.historyIcon} />
                    </View>
                    <View style={styles.settingStyle}>
                        <HomeIcon image={icons.settingIcon} />
                    </View>
                    
                </View>
                <View>

                <UserList />
                </View>

                <View>
                    <Text style={styles.textStyles}>Trending now </Text>
                    <LatestSong/>
                   
                </View>

                <View>
                <Text style={styles.textStyles}>Top picks for you </Text>
                <RecentSong/>
                </View>

            </View>
        </LinearGradient >
    )
}
export default HomeScreen