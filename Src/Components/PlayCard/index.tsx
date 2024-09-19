import { FC } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import IoniconsIcon from '../IoniconButton';
import { styles } from './style';

const PlayCard = ({ songs, onPress }: { songs: any[]; onPress: (songId: string) => void }) => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={songs}
        renderItem={({ item }) => {
          const imageUrl = item.images?.[0]?.url || 'No image available';

          return (
            <TouchableOpacity onPress={() => onPress(item.id)}>
              <View style={styles.rootContainer}>
                <View style={styles.imageTextContainer}>
                  <Image
                    source={ require('../../Utils/Images/Ed_Sheeran.jpg')}
                    style={styles.imageStyle}
                  />
                  <View style={[styles.textContainer, { flex: 0.9 }]}>
                    <Text style={styles.titleTextStyle}>{item.name}</Text>
                    <View style={styles.artistContainer}>
                      <Text style={styles.textStyle}>
                        {item.artists.map((artist: any) => artist.name).join(', ')}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.iconContainer}>
                  <IoniconsIcon name="ellipsis-vertical-outline" color="white" />
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default PlayCard;
