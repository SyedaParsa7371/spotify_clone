import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    rootcontainer: {
        flexDirection: 'row',
        borderRadius: 5,
        margin: 5,
    },
    CardContainer: {
        height: 100, 
        width: 190,
        borderRadius: 5,
        marginLeft: 10,
        marginTop: 15,
    },
    CardText: {
        color: 'white',
        padding: 10,
        justifyContent: 'center',
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 40,
    }
});

export default styles;
