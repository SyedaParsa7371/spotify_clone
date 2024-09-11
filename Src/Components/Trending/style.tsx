import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    trendingContainer:{
        flexDirection: 'row',
         justifyContent: 'space-between',
         
    },
    trendingInnerContainer:{
         alignItems: 'center' ,
         paddingTop:10
    },
    trendingTitle:{
        width: 175, 
        paddingLeft:15,
        textAlign: 'left',
        color: 'white' ,
        fontWeight:'bold'
    },
    trendingText:{
        width: 175, 
        paddingLeft:13,
        textAlign: 'left',
        color: 'white' ,
        paddingBottom:20,
      
    }
})
export default styles