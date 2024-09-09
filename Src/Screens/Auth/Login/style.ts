import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: 'black'
    },
    container: {
        marginTop: 300
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
        padding:15,
        borderRadius:30
    }
})
export default styles