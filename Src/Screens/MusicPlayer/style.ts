import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  linearStyle: {
    flex: 1,
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  backIcon:{
    marginLeft: 10
  },
  headingStyle:{
    alignItems: 'center',
    marginLeft:60
  },
  headingTitle:{
    color: 'white',
     fontSize: 18
  },
  headingText:{
    color: 'white', 
    fontSize: 18, 
    fontWeight: 'bold'
  },
  mainImgStyle:{
    marginTop: 40,
    width: 350,
    height: 370,
    marginBottom: 15,
    marginLeft: 30,
  },
  middlecontainer:{
    flexDirection: 'row'
  },
  middlecontainHead:{
    color: '#cfcaca', 
    fontSize: 20,
     marginLeft: 17
  },
  middleconticon:{
    marginTop: 20, 
    marginLeft: 70
  },
  timeimg:{
    marginTop: 30, marginLeft: 30
  },
  imgcontain:{
flexDirection: 'row'
  },
  shuffleimg:{
    marginLeft: 30, marginTop: 20
  },
  arrowrightimg:{
    marginLeft: 55, marginTop: 20
  },
  pauseimg:{
    height:75,width:78,marginLeft:25
  },
  arrowlefyimg:{
    marginLeft: 30, marginTop: 20
  },
  loopImg:{
    marginLeft: 47,
     marginTop: 20
  },
  castimg:{
    marginLeft: 40, height: 30, width: 30
  },
  shareimg:{
    marginLeft: 230, 
    height: 20,
     width: 20,
      marginTop: 5
  },
  lyricscontainer:{
    height:300,width:'85%',backgroundColor:'#b18c8c',marginLeft:30,borderRadius:10,marginTop:30
  },
  lyricstext:{
    color:'white',fontWeight:"bold",fontSize:18,marginLeft:20,marginTop:20
  },
  
});
export default styles;
