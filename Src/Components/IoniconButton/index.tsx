import { FC } from "react";
import { TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { IIcon } from "../../Utils/Interface";

const IoniconsIcon:FC<IIcon>=({name,size,color})=>{
    return (
        <View>
            <TouchableOpacity>
                <Ionicons name={name} size={30} color={color}/>
            </TouchableOpacity>
        </View>
    )
}

export default IoniconsIcon