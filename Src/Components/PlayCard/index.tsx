import React, { FC, useState } from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  Share,
} from 'react-native';
import IoniconsIcon from '../IoniconButton';
import { styles } from './style';
import { IPlayCard } from '../../Utils/Interface';
import SongModal from '../Modal';

const PlayCard: FC<IPlayCard> = ({ songs, onPress }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSong, setSelectedSong] = useState<any>(null);
  const [albumName, setAlbumName] = useState<string | null>(null);

  const handleIconPress = (song: any) => {
    setSelectedSong(song);
    setModalVisible(true);
  };

  const shareSong = async () => {
    if (selectedSong?.preview_url) {
      try {
        await Share.share({
          message: `Check out this song: ${selectedSong.name} Link of song: ${selectedSong.preview_url}`,
        });
      } catch (error) {
        console.log('Error sharing the song:', error.message);
      }
    } else {
      console.log('No preview URL available');
    }
  };

  const viewArtist = () => {
    if (selectedSong?.artists) {
      console.log(selectedSong.artists.map((artist: any) => artist.name).join(', '));
    } else {
      console.log('No artist information available');
    }
  };



  return (
   <>
      <FlatList
        data={songs}
        renderItem={({ item }) => {
          const imageUrl = item.images?.[0]?.url || 'No image available';

          return (
            <TouchableOpacity onPress={() => onPress(item.id)}>
              <View style={styles.rootContainer}>
                <View style={styles.imageTextContainer}>
                  <Image
                    source={require('../../Utils/Images/Ed_Sheeran.jpg')}
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
                  <TouchableOpacity>
                    <IoniconsIcon
                      name="ellipsis-vertical-outline"
                      color="white"
                      onPress={() => handleIconPress(item)}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.id}
      />

      <SongModal
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
        } }
        selectedSong={selectedSong}
        onShare={shareSong} 
           />
   </>
  );
};

export default PlayCard;
