import { Text, TouchableOpacity, View } from "react-native"
import styles from "./style"
import { FC } from "react"
import { ICardTop } from "../../Utils/Interface"
import { useNavigation } from "@react-navigation/native"

const CardTop:FC<ICardTop>=({children})=> {
const navigation = useNavigation()

function navigationHandler(){

}
return (

    <View style={styles.rootcontainer}>
      <TouchableOpacity style={styles.CardContainer} >
        <Text style={styles.CardText}>{children}</Text>
      </TouchableOpacity>
     </View>
     
    )
}

export default CardTop