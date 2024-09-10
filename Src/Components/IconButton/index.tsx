import { FC } from "react";
import { Image, Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import { IIMage } from "../../Utils/Interface";
import { styles } from "./style";

const IconButton: FC<IIMage> = ({ image , onPress ,source }) => {
   

    return (

        <TouchableOpacity onPress={onPress}>
            <View>
                <Image style={styles.imageContainer} source={image}  />
            </View>
        </TouchableOpacity>

    )
}

export default IconButton