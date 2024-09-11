import { TextInput, View } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./style"

function SearchBar() {
    return (
        <View
        style={styles.rootContainer}
      >
        <Ionicons
          name="search" 
          size={26}
          color="#0c0c0c"
          style={styles.iconStyle} 
        />
        <TextInput
          placeholder="Artist, songs, or podcasts"
          placeholderTextColor="#3b3939"
          style={styles.inputStyle}
       

          
        />
        </View>
    )
}
export default SearchBar