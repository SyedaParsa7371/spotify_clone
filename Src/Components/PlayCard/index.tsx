import { FC } from 'react';
import { FlatList, Image, Pressable, Text, View } from 'react-native';
import IoniconsIcon from '../IoniconButton';
import { styles } from './style';
import { DATA } from '../../Utils/Data';



const PlayCard = ({ onPress }: any) => {
    return (
      <FlatList
        data={DATA}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={onPress}
              style={({ pressed }) => (pressed ? { opacity: 0.5 } : {})}
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

                <IoniconsIcon name="ellipsis-vertical-outline" color="white" />
                </View>
              </View>
            </Pressable>
          );
        }}
        keyExtractor={item => item.id}
      />
    );
  };
  

export default PlayCard;
