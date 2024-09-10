import { StyleSheet } from "react-native";
import Colors from "../../../Utils/Colors";



const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: Colors.primaryblack
    },
    container: {
        marginTop:80
    },
    text:{
        color:"white",
        fontSize:30,
        fontWeight:"bold",
        textAlign:"center"
    },
    buttons:{
        marginTop:25
    },
    buttonsSign:{
        borderWidth:1,
        borderColor:"white",
        margin:5,
        justifyContent:'center',
        padding:10,
        borderRadius:30
    },
    imageContainer: {
        marginTop: 190,
        height: 30,
        width: 30,
        marginRight:5
    },
    images: {
        height: 100,
        width: 100,
       marginHorizontal:150

    }
})
export default styles