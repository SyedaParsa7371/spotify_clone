import React, { useEffect, useState } from 'react';
import {
  Image,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {
  BackIcon,
  PlayIcon,
  SpotifyIcon,
} from '../../Components/IconButton';
import { icons } from '../../Utils/Images';
import { useNavigation, useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import IoniconsIcon from '../../Components/IoniconButton';
import PlayCard from '../../Components/PlayCard';
import { getAlbumSongs } from '../../Utils/Http/Api';

function PlayListScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { albumId } = route.params;
  const [songs, setSongs] = useState<any[]>([]);
  const [artists, setArtists] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showAllArtists, setShowAllArtists] = useState<boolean>(false);
  const [formattedTime, setFormattedTime] = useState('');
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0); // New state for current song index

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

    const totalDurationMs = songs.reduce((acc, song) => acc + song.duration_ms, 0);
    const hours = Math.floor(totalDurationMs / 3600000);
    const minutes = Math.floor((totalDurationMs % 3600000) / 60000);
    const seconds = Math.floor((totalDurationMs % 60000) / 1000);
    const formatted = `${hours}h ${minutes}m ${seconds}s`;
    setFormattedTime(formatted);
  }, [songs]);

  const handlePlayNextSong = () => {
    const nextIndex = currentSongIndex + 1;
    if (nextIndex < songs.length) {
      setCurrentSongIndex(nextIndex);
      navigation.navigate('Music Player Screen', { 
        songId: songs[nextIndex].id, 
        playlist: songs // Pass the entire song list
      });
    }
  };

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
    return <Text style={{ color: '#faf8f8', textAlign: 'center' }}>{error}</Text>;
  }

  const displayedArtists = showAllArtists ? artists : artists.slice(0, 3);
  const totalTracks = songs.length;

  return (
    <LinearGradient
      colors={['#5e5e5e', '#181616', '#1a1919']}
      style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 9 }}>
        <BackIcon
          image={icons.backIcon}
          onPress={() => navigation.goBack()}
        />
        <View style={{ marginLeft: 70 }}>
          <Image
            source={require('../../Utils/Images/Ed_Sheeran.jpg')}
            style={{ width: 220, height: 250, marginBottom: 15 }}
          />
        </View>
      </View>

      <View>
        <View
          style={{
            marginTop: 20,
            marginLeft: 10,
            flexDirection: 'row',
            maxWidth: '100%',
            flexWrap: 'wrap',
          }}>
          <Text style={{ color: '#a5a1a1', fontSize: 16, marginTop: 1 }}>
            Tune in to Top Tracks from{' '}
          </Text>
          {displayedArtists.map((artist, index) => (
            <Text
              key={index}
              style={{ color: '#a5a1a1', fontSize: 16, marginVertical: 1 }}>
              {artist}
              {index < displayedArtists.length - 1 ? ' , ' : ''}
            </Text>
          ))}

          {artists.length > 2 && (
            <TouchableOpacity onPress={() => setShowAllArtists(!showAllArtists)}>
              <Text
                style={{
                  color: '#1a7228',
                  marginHorizontal: 7,
                  fontSize: 16,
                  marginTop: 1,
                  fontWeight: 'bold',
                }}>
                {showAllArtists ? 'Show Less' : 'Show More'}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <SpotifyIcon image={icons.login} />
        <Text
          style={{
            color: 'white',
            fontSize: 17,
            fontWeight: 'bold',
            marginTop: 24,
          }}>
          Spotify
        </Text>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: 'white', marginLeft: 8 }}>
          Total Tracks: {totalTracks}
        </Text>
        <Text style={{ color: 'white', marginLeft: 8 }}>
          {formattedTime}
        </Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', width: '95%' }}>
        <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
          <IoniconsIcon name="heart-outline" color="white" />
          <IoniconsIcon
            name="ellipsis-vertical-outline"
            color="white"
            style={{ marginLeft: 10 }}
          />
        </View>
        <View style={{ marginLeft: 280 }}>
          <TouchableOpacity onPress={handlePlayNextSong}>
            <PlayIcon image={icons.playIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ marginTop: 20, marginLeft: 10, flex: 1 }}>
        <PlayCard
          songs={songs}
          onPress={songId => {
            const songIndex = songs.findIndex(song => song.id === songId);
            setCurrentSongIndex(songIndex);
            navigation.navigate('Music Player Screen', { songId, playlist: songs });
          }}
        />
      </View>
    </LinearGradient>
  );
}

export default PlayListScreen;
