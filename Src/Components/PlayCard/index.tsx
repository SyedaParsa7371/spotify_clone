import { FC } from 'react';
import { FlatList, Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import IoniconsIcon from '../IoniconButton';
import { styles } from './style';
import { DATA } from '../../Utils/Data';



const PlayCard = ({ onPress }: any) => {
    return (
      <View style={{flex:1}}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={onPress}
             
            >
              <View style={styles.rootContainer}>
                <View style={styles.imageTextContainer}>
                  <Image source={item.image} style={styles.imageStyle} />
                  <View style={styles.textContainer}>
                    <Text style={styles.titleTextStyle}>{item.title}</Text>
                    <View style={styles.artistContainer}>
                      <Text style={styles.lyricsText}>LYRICS</Text>
                      <Text style={styles.textStyle}>{item.artist}</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.iconContainer}>

                
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id}
      />
      </View>
    );
  };
  

export default PlayCard;
