import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    width: '95%',
    marginBottom:15
  },
  imageTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyle: {
    width: 45,
    height: 50,
    marginRight: 10, 
  },
  textContainer: {},
  titleTextStyle: {
    marginVertical: 5,
    color: 'white',
    fontSize: 20,
    fontWeight: '900',
  },
  artistContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lyricsText: {
    backgroundColor: '#c5c4c4',
    color: 'black',
    paddingHorizontal: 3,
    fontSize: 10,
    fontWeight: 'bold',
    marginRight: 4,
    borderRadius: 2,
    height: 15,
    marginTop: 4,
  },
  textStyle: {
    color: 'gray',
    fontSize: 16,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  modalContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    marginTop: '105%',
    width: '100%',
    height: '50%',
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
    color: 'white',
  },
  modalText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    backgroundColor: '#2196F3',
  },
  shareImg: {
    height: 20,
    width: 20,
    marginTop: 5,
  },
});
