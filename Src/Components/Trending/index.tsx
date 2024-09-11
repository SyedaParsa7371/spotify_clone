import { View, TouchableOpacity, Image, Text, ScrollView } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

function LatestSong() {
  const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity >
      
      </TouchableOpacity>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.trendingContainer}>

          <View style={styles.trendingInnerContainer}>
            <TouchableOpacity onPress={()=>navigation.navigate("PlayListScreen")}>
            <Image
              source={require('../../Utils/Images/Ed_Sheeran.jpg')}
              style={{ width: 150, height: 175 }}
            />
            </TouchableOpacity>
            <Text style={styles.trendingTitle}>Believers</Text>
            <Text style={styles.trendingText}>Song. Imagine Dragons</Text>
          </View>

          <View style={styles.trendingInnerContainer}>
            <TouchableOpacity onPress={()=>navigation.navigate("PlayListScreen")}>
            <Image
              source={require('../../Utils/Images/Ed_Sheeran.jpg')}
              style={{ width: 150, height: 175 }}
            />
            </TouchableOpacity>
            <Text style={styles.trendingTitle}>Believers</Text>
            <Text style={styles.trendingText}>Song. Imagine Dragons</Text>
          </View>
          <View style={styles.trendingInnerContainer}>
            <TouchableOpacity onPress={()=>navigation.navigate("PlayListScreen")}>
            <Image
              source={require('../../Utils/Images/Ed_Sheeran.jpg')}
              style={{ width: 150, height: 175 }}
            />
            </TouchableOpacity>
            <Text style={styles.trendingTitle}>Believers</Text>
            <Text style={styles.trendingText}>Song. Imagine Dragons</Text>
          </View>

         </View>
      </ScrollView>
    </View>
  );
}

export default LatestSong;
