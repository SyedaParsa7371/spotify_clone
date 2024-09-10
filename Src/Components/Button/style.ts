import { StyleSheet } from "react-native";
import Colors from "../../Utils/Colors";


const styles = StyleSheet.create({
    RootContainer: {
        borderWidth: 1,
        borderColor: Colors.primarywhite,
        margin: 5,
        justifyContent: "center",
        padding: 9,
        borderRadius: 30,
    },
    Text: {
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.primarywhite,
        textAlign: "center",
        flex: 1,
    },
    buttonSignup: {
        borderWidth: 1,
        borderColor: Colors.primarywhite,
        margin: 4,
        justifyContent: "center",
        padding: 10,
        borderRadius: 30,
        backgroundColor: Colors.sigunup,
    },
    TextSign: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "#0c0b0b",
    },
    images: {
        height: 35,
        width: 35,
        marginRight: 10,
    },
    buttonContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    buttonlogin: {
        margin: 5,
        justifyContent: "center",
        padding: 5,
        borderRadius: 30,
        color:Colors.primarywhite
    },
    textlogin:{
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.primarywhite,
        textAlign: "center",
     
    }
});

export default styles;
