import React, { useEffect, useLayoutEffect, useState } from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Share,
} from 'react-native';
import { BackIcon, PlayIcon, SpotifyIcon } from '../../Components/IconButton';
import { icons } from '../../Utils/Images';
import { useNavigation, useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import IoniconsIcon from '../../Components/IoniconButton';
import PlayCard from '../../Components/PlayCard';
import { getAlbumSongs } from '../../Utils/Http/Api';
import SongModal from '../../Components/Modal';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  interpolate,
} from 'react-native-reanimated';
import styles from './style';

function PlayListScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { albumId, albumName } = route.params; 
 // console.log('Album Name:', albumName); 

  const [songs, setSongs] = useState<any[]>([]);
  const [artists, setArtists] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showAllArtists, setShowAllArtists] = useState<boolean>(false);
  const [formattedTime, setFormattedTime] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSong, setSelectedSong] = useState<any>(null);

  const offsetY = useSharedValue(0);

  const navhandker = () => {
    navigation.goBack();
  };

  const reanimatedImageStyle = useAnimatedStyle(() => {
    const opacity = interpolate(offsetY.value, [0, 400], [1, 0], 'clamp');
    const translateY = interpolate(offsetY.value, [0, 150], [0, 100], 'clamp');
    return {
      transform: [{ translateY }],
      opacity,
    };
  });

  const reanimatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(offsetY.value * 0.5, [0, 100], [1, 0.2], 'clamp');
    const opacity = interpolate(offsetY.value, [0, 150], [1, 0], 'clamp');

    return {
      transform: [{ scale }],
      opacity,
    };
  });

  const reanimatedTextStyle = useAnimatedStyle(() => {
    const translateY = interpolate(offsetY.value, [0, 170], [0, -100], 'clamp');
    return {
      translateY,
    };
  });

  const reanimatedHeaderTitle = useAnimatedStyle(() => {
    const translateY = interpolate(offsetY.value, [0, 150], [50, 0], 'clamp');
    const opacity = interpolate(offsetY.value, [150, 200], [0, 1], 'clamp');
  
    return {
      transform: [{ translateY }],
      opacity,
      backgroundColor: opacity > 0 ? 'rgba(110, 110, 110, 0.7)' : 'transparent', 
      paddingVertical: 5, 
      
      
    };
  });
  const reanimatedHeaderTitles = useAnimatedStyle(() => {
    const translateY = interpolate(offsetY.value, [0, 150], [50, 0], 'clamp');
    const opacity = interpolate(offsetY.value, [150, 200], [0, 1], 'clamp');
  
    return {
      transform: [{ translateY }],
      opacity,
      backgroundColor: opacity > 0 ? '' : 'transparent', 
      paddingVertical: 5, 
      
      
    };
  });
  

 

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
      } catch (error: any) {
        console.log('Error sharing the song:', error.message);
      }
    } else {
      console.log('No preview URL available');
    }
  };

  const handleScroll = (event: any) => {
    offsetY.value = event.nativeEvent.contentOffset.y;
  };

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await getAlbumSongs(albumId);
        setSongs(response.items);

        const artistNames = response.items.flatMap((song: any) =>
          song.artists.map((artist: any) => artist.name),
        );
        const uniqueArtists = Array.from(new Set(artistNames));
        setArtists(uniqueArtists);
      } catch (err) {
        setError('Failed to fetch album songs');
        console.error('Error fetching songs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSongs();
  }, [albumId]);

  useEffect(() => {
    if (songs.length === 0) return;

    const totalDurationMs = songs.reduce(
      (acc, song) => acc + song.duration_ms,
      0,
    );
    const hours = Math.floor(totalDurationMs / 3600000);
    const minutes = Math.floor((totalDurationMs % 3600000) / 60000);
    const seconds = Math.floor((totalDurationMs % 60000) / 1000);
    const formatted = `${hours}h ${minutes}m ${seconds}s`;
    setFormattedTime(formatted);
  }, [songs]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Animated.View style={[reanimatedHeaderTitles,styles.headerStyle]}>
        <LinearGradient colors={['#52534E', '#272725', '#121212' ]} style={{width:'420%',height:60}}>
          <View style={{flexDirection:'row',margin:5,marginTop:10}}>
          <IoniconsIcon onPress={navhandker} name="chevron-back-outline" color="#fdfcfc" />
          
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#ffffff',marginTop:5 ,marginLeft:50}}>
            {albumName}
          </Text>
          </View>
        </LinearGradient>
        </Animated.View>
      ),
      title: albumName,
      headerTitle: () => (
        <Animated.View style={[reanimatedHeaderTitle]}>
          <LinearGradient colors={['#52534E', '#272725', '#121212' ]} style={{width:'420%',height:50}}>

          </LinearGradient>
        </Animated.View>
      ),
    });
  }, [navigation, albumName, reanimatedHeaderTitle]);
  
  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        color="#ffffff"
        style={{ backgroundColor: '#121212', flex: 1 }}
      />
    );
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  const displayedArtists = showAllArtists ? artists : artists.slice(0, 3);
  const totalTracks = songs.length;

  return (
    <LinearGradient
      colors={['#52534E', '#272725', '#121212']}
      style={styles.linearStyle}>
      <Animated.ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
        <View style={[styles.headerIcon]}>
        <IoniconsIcon onPress={navhandker} name="chevron-back-outline" color="#fffefe" />
          <Animated.View style={[styles.imageView, reanimatedImageStyle]}>
         
            <Animated.Image
              source={require('../../Utils/Images/Ed_Sheeran.jpg')}
              style={[styles.imageStyle, reanimatedStyle]}
            />
          </Animated.View>
        </View>
        <Animated.View style={[reanimatedTextStyle]}>
          <View style={styles.sectionStyle}>
            <Text style={styles.sectionTextStyle}>
              Tune in to Top Tracks from{' '}
            </Text>
            {displayedArtists.map((artist, index) => (
              <Text key={index} style={styles.sectionTextStyle}>
                {artist}
                {index < displayedArtists.length - 1 ? ' , ' : ''}
              </Text>
            ))}
            {artists.length > 2 && (
              <TouchableOpacity onPress={() => setShowAllArtists(!showAllArtists)}>
                <Text style={styles.sectionButton}>
                  {showAllArtists ? 'Show Less' : 'Show More'}
                </Text>
              </TouchableOpacity>
            )}
          </View>

          <View style={{ flexDirection: 'row' }}>
            <SpotifyIcon image={icons.login} />
            <Text style={styles.section2Text}>Spotify</Text>
          </View>

          <View style={styles.section3Styles}>
            <Text style={styles.section3Text}>
              Total Tracks: {totalTracks}
            </Text>
            <Text style={styles.section3Text}>{formattedTime}</Text>
          </View>

          <View style={styles.section4Styles}>
            <View style={styles.section4View}>
              <IoniconsIcon name="heart-outline" color="white" />
              <IoniconsIcon
                name="ellipsis-vertical-outline"
                color="white"
                style={styles.section4Icon}
                onPress={() => handleIconPress(selectedSong)}
              />
            </View>
            <View style={styles.section4Icon2}>
              <TouchableOpacity>
                <PlayIcon image={icons.playIcon} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.playCardView}>
            <PlayCard
              songs={songs}
              onPress={songId => {
                navigation.navigate('Music Player Screen', { songId,playlist: songs,});
              }}
            />
          </View>
          <SongModal
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
            selectedSong={selectedSong}
            onShare={shareSong}
          />
        </Animated.View>
      </Animated.ScrollView>
    </LinearGradient>
  );
}

export default PlayListScreen;
