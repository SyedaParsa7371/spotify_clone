import { ScrollView, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { BellIcon, HomeIcon } from '../../Components/IconButton';
import UserList from '../../Components/ProfileUser';
import RecentSong from '../../Components/Recent/index ';
import PlayListSong from '../../Components/Trending';
import Colors from '../../Utils/Colors';
import { icons } from '../../Utils/Images';
import styles from './style';

function HomeScreen() {
  return (
    <ScrollView>
      <LinearGradient
        colors={[
          Colors.linear1home,
          Colors.linear2home,
          Colors.linear3home,
          Colors.linear4home,
          Colors.linear5home,
        ]}
        style={{height: '100%'}}>
        <View>
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
            <PlayListSong />
          </View>

          <View>
            <Text style={styles.textStyles}>Top picks for you </Text>
            <RecentSong />
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}
export default HomeScreen;
