import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { ICardTop } from '../../Utils/Interface';


const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const CardTop: React.FC<ICardTop> = ({ children, onPress }) => {
  const navigation = useNavigation();
  
  const randomColor = getRandomColor();

  return (
    <View style={[styles.rootcontainer, { backgroundColor: randomColor }]}>
      <TouchableOpacity 
        style={styles.CardContainer} 
        onPress={() => navigation.navigate('Play List Screen')}
      >
        <Text style={styles.CardText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardTop;
