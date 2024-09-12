import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  imageTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyle: {
    width: 45,
    height: 50,
    marginRight: 10, // Reduced margin to decrease gap
  },
  textContainer: {
  
  },
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
    paddingHorizontal: 10, // Add padding if needed
  },
});
