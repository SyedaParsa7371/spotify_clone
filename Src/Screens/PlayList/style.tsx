import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    linearStyle:{
        flex:1
    },
    headerIcon:{
        flexDirection: 'row', marginTop: 20, marginHorizontal: 10
    },
    imageView:{
        marginHorizontal: 10
    },
    imageStyle:{
        width: 300, height: 300,
        marginHorizontal:40
    },
    sectionStyle:{
        marginTop: 20,
        marginLeft: 10,
        flexDirection: 'row',
        maxWidth: '100%',
        flexWrap: 'wrap',
    },
    sectionButton:{
        color: '#1a7228',
        marginHorizontal: 7,
        fontSize: 16,
        marginTop: 1,
        fontWeight: 'bold',
    },
    errorText:{
        color: '#cc0909', textAlign: 'center'
    },
    sectionTextStyle:{
        color: '#a5a1a1', fontSize: 16, marginVertical: 1
    },
    section2Text:{
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 24,
    },
    section3Styles:{
        flexDirection: 'row'
    },
    section3Text:{
        color: 'white', marginLeft: 8
    },
    section4Styles:{
        flexDirection: 'row', alignItems: 'center', width: '95%'
    },
    section4View:{
        flexDirection: 'row', marginTop: 10, marginLeft: 10
    },
    section4Icon:{
        marginLeft: 10
    },
    section4Icon2:{
        marginLeft: 280
    },
    playCardView:{
        marginTop: 20, marginLeft: 10, flex: 1
    }

    

})
export default styles