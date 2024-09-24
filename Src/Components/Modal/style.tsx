import { StyleSheet } from "react-native"

const styles=StyleSheet.create({
    textStyle: {
        color: '#ffffff',
        fontSize: 16,
      },
    modalContainer: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'rgba(71, 71, 71, 0.5)', 
      },
      modalView: {
        marginTop:'105%',
        width: '100%',
        height:'50%',
        backgroundColor: '#0e0d0d',
        borderRadius: 20,
        padding: 20,
        // alignItems: 'center',
        elevation: 5, 
      },
      modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
         color:'white'
      },
      modalText: {
        fontSize: 18,
        textAlign: 'center',
        color:'white'
      },
      button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
       
        color:'white',
        alignItems:'center',
        width:100,
        marginLeft:150,
        marginTop:30
      },
      shareImg:{
        height: 20,
        width: 20,
        marginTop: 5,
      }
})
export default styles
