import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    userContainer:{
        flexDirection: 'row',
         justifyContent: 'flex-start',
         marginBottom:20,
        
    },
    userInnerContainer:{
         alignItems: 'center' 
    },
    userText:{
        width: 175, 
        paddingLeft:12,
        textAlign: 'left',
        color: 'white' ,
    }
})
export default styles