import { FC } from "react"
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import styles from "./style"
import { userData } from "../../Utils/Data";
import { useNavigation } from "@react-navigation/native";
const UserList: FC = () => {

    const navigation = useNavigation();
    const renderItem = ({ item }:any) => (
      <View style={styles.userInnerContainer}>
         <TouchableOpacity onPress={() => navigation.navigate("Play List Screen")}>
        <Image
          source={item.image}
          style={{ width: 150, height: 175 }}
        />
        <Text style={styles.userText}>{item.description}</Text>
        </TouchableOpacity>
      </View>
    );
  
    return (
      <FlatList
        data={userData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.userContainer}
      />
    );
  };



export default UserList