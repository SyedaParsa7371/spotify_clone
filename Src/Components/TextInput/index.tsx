import { FC } from "react"
import { TextInput } from "react-native"
import { IInputText } from "../../Utils/Interface"

const InputText:FC<IInputText>=({onChangeText,value,placeholder})=>{

     return (
        <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        style={{padding: 10}}
      />
     )
}
export default InputText()