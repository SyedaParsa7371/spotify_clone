import {StyleSheet} from 'react-native';
import Colors from '../../Utils/Colors';

const styles = StyleSheet.create({
  headerContainer: {
    margin: '2%',

    flexDirection: 'row',
  },
  textStyles: {
    color: Colors.primarywhite,
    fontSize: 27,
    fontWeight: 'bold',
    paddingLeft: 17,
    paddingTop: '3%',
  },
  bellStyle: {
    marginLeft: 90,
    marginTop: '3.9%',
  },
  historyStyle: {
    paddingLeft: 20,
    marginTop: '2.5%',
  },
  settingStyle: {
    paddingLeft: 18,
    marginTop: '3.7%',
  },
});
export default styles;
