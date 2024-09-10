import { FC } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { IIonicons } from "../Interface";
const Icons:FC<IIonicons>=({name,color,size})=>{
    return (
        <Ionicons name={name} color={color} size={size}/>
    )
}
 export default Icons