import { StyleSheet } from "react-native"
import Colors from "../../Utils/Colors";

const styles = StyleSheet.create({
  trendingContainer: {
    padding: 20,
  },
  trendingInnerContainer: {
    marginRight: 20,
    alignItems: 'center',
  },
  trendingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: Colors.primarywhite,
    width:150
  },
  trendingText: {
    fontSize: 16,
    color: Colors.trendText,
    
    marginTop: 5,
    width:150
  },
  errorText: {
    textAlign: 'center',
    color: Colors.primaryred,
    fontSize: 16,
  },
});

  
export default styles