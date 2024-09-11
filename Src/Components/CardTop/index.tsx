import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { ICardTop } from '../../Utils/Interface';

const CardTop: React.FC<ICardTop> = ({ children }) => {





  return (
    <View style={styles.rootcontainer}>
      <TouchableOpacity style={styles.CardContainer} >
        <Text style={styles.CardText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardTop;
