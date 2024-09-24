import { StyleSheet } from "react-native"
import Colors from "../../Utils/Colors";

const styles = StyleSheet.create({
  recentContainer: {
    padding: 20,
  },
  recentInnerContainer: {
    marginRight: 20,
    alignItems: 'center',
  },
  recentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color:Colors.primarywhite,
    width: 150, 
  },
  recentText: {
    fontSize: 14,
    color: '#fdfbfb',
    textAlign: 'center',
    marginTop: 5,
    width: 150, 
  },
  errorText: {
    textAlign: 'center',
    color: Colors.primaryred,
    fontSize: 16,
  },
  });
  
export default styles