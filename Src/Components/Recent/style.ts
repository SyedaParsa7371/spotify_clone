import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    recentContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    recentInnerContainer: {
      alignItems: 'center',
      paddingTop: 10
    },
    recentTitle: {
      width: 175,
      paddingLeft: 15,
      textAlign: 'left',
      color: 'white',
      fontWeight: 'bold'
    },
    recentText: {
      width: 175,
      paddingLeft: 13,
      textAlign: 'left',
      color: 'white',
      paddingBottom: 20,
    }
  });
  
export default styles