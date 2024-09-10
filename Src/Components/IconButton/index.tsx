import { FC } from "react";
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IImage } from "../../Utils/Interface";
import { styles } from "./style";

const IconButton: FC<IImage> = ({ image , onPress ,source }) => {
   

    return (

        <TouchableOpacity  >
            <View>
                <Image style={styles.imageContainer} source={image}  />
                
            </View>
        </TouchableOpacity>

    )
}

export default IconButton

export const IconButtons: FC<IImage> = ({ image , onPress ,source }) => {
   

    return (

        <TouchableOpacity  >
            <View>
                <Image source={image} style={styles.imageContainers} />
            </View>
        </TouchableOpacity>

    )
}

