import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { ICardTop } from '../../Utils/Interface';

const CardTop: React.FC<ICardTop> = ({ children,onPress }) => {
  const navigation = useNavigation()





  return (
    <View style={styles.rootcontainer}>
      <TouchableOpacity style={styles.CardContainer} onPress={()=>navigation.navigate('Play List Screen')} >
        <Text style={styles.CardText}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardTop;
