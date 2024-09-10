import { StyleSheet } from "react-native";
import Colors from "../../../Utils/Colors";

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: Colors.primaryblack,
        padding: 16, 
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center', 
    },

    textStyle: {
        color: '#25b154', 
        fontSize: 40, 
        fontWeight: 'bold',
        marginRight:150


    },
    container: {
        
    },
    textcontainer: {
        paddingVertical: 10,
    },
    text:{
        color:"white",
        fontSize:22,
        fontWeight:"bold",
        textAlign:"center",
        marginBottom:130
    },
    textError:{
        color:"#c50a0a",
        fontSize:16,
        fontWeight:"bold",
       paddingLeft:28,
       marginTop:10
    },
});

export default styles;
