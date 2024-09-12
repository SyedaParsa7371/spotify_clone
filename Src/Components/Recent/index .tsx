import { View, TouchableOpacity, Image, Text, ScrollView, FlatList } from "react-native"
import styles  from "./style"
import { useNavigation } from "@react-navigation/native"
import { data } from "../../Utils/Data";

function RecentSong() {
    const navigation = useNavigation();
  
    const renderItem = ({ item }) => (
      <View style={styles.recentInnerContainer}>
        <TouchableOpacity onPress={() => { navigation.navigate('Play List Screen') }}>
          <Image
            source={item.image}
            style={{ width: 150, height: 175 }}
          />
        </TouchableOpacity>
        <Text style={styles.recentTitle}>{item.title}</Text>
        <Text style={styles.recentText}>{item.text}</Text>
      </View>
    );
  
    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.recentContainer}
      />
    );
  }
export default RecentSong