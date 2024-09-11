import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    rootcontainer: {
        flexDirection: 'row'
    },
    searchContainer: {
        height: 100, width: 190,
        backgroundColor: "#7f499e",
        borderRadius: 5,
        marginLeft: 10,
        marginTop: 15,
        margin:5
    },
    searchText: {
        color: 'white',
        padding: 10,
        justifyContent: 'center',
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom:40
    }
})
export default styles