import { Text, TouchableOpacity, View } from "react-native";
import { FC } from "react";
import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook
import styles from "./style";
import CardTop from "../CardTop";

const TopCard: FC = () => {
  

  return (
    <View style={styles.rootcontainer}>
      
      
      <CardTop>Prop</CardTop>
      <CardTop>Prop</CardTop>
    </View>
   

  );
};

export default TopCard;
