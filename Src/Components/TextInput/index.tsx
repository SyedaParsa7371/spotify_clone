import { FC } from "react";
import { TextInput, View } from "react-native";
import { IInputText } from "../../Utils/Interface";
import { styles } from "./style";

const InputText: FC<IInputText> = ({ onChangeText, value, placeholder,secure }) => {
    return (
        <View style={styles.rootcontainer}>
            <TextInput
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                placeholderTextColor="#faf9f9"
                secureTextEntry={secure}
                 
                
             style={styles.textstyle}
            />
        </View>
    );
};

export default InputText;
