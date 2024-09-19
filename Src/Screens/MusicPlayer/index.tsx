import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation, useRoute} from '@react-navigation/native';
import Sound from 'react-native-sound';
import Slider from '@react-native-community/slider';
import {getTrack} from '../../Utils/Http/Api';
import {BackIcon} from '../../Components/IconButton';
import {icons} from '../../Utils/Images';
import Ionicons from '../../Utils/Ionicons';
import styles from './style';

const MusicPlayerScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {songId, playlist = []} = route.params; // Default to empty array if undefined
  const [trackData, setTrackData] = useState<any>(null);
  const [duration, setDuration] = useState<number>(0);
  const [position, setPosition] = useState<number>(0);
  const [sound, setSound] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0); // Current song index

  const fetchTrack = async (id: string) => {
    try {
      const data = await getTrack(id);
      if (!data || !data.preview_url) {
        throw new Error('Invalid track data or preview URL missing');
      }
      setTrackData(data);
      const newSound = new Sound(data.preview_url, Sound.MAIN_BUNDLE, error => {
        if (error) {
          console.error('Error loading track:', error);
          return;
        }
        setDuration(newSound.getDuration());
        setSound(newSound);
      });
    } catch (error) {
      console.error('Error fetching track:', error);
    }
  };

  useEffect(() => {
    fetchTrack(songId); // Fetch initial track

    return () => {
      if (sound) {
        sound.release();
      }
    };
  }, [songId]);

  const togglePlayback = () => {
    if (sound) {
      if (isPlaying) {
        sound.pause();
      } else {
        sound.play(() => setIsPlaying(false));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNextTrack = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < playlist.length) {
      setCurrentIndex(nextIndex);
      fetchTrack(playlist[nextIndex].id);
      setIsPlaying(false);
    } else {
      console.log('Reached end of playlist');
    }
  };

  const handlePreviousTrack = () => {
    const nextIndex = currentIndex - 1;
    if (nextIndex >= 0) {
      setCurrentIndex(nextIndex);
      fetchTrack(playlist[nextIndex].id);
      setIsPlaying(false);
    } else {
      console.log('Reached start of playlist');
    }
  };

  const handleSeek = (value: number) => {
    if (sound) {
      sound.setCurrentTime(value);
    }
  };

  useEffect(() => {
    const updatePosition = () => {
      if (sound) {
        sound.getCurrentTime(seconds => {
          setPosition(seconds);
        });
      }
    };

    const intervalId = setInterval(updatePosition, 1000);
    return () => clearInterval(intervalId);
  }, [sound]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons
          name="ellipsis-vertical-outline"
          size={24}
          color="white"
          onPress={() => {}}
        />
      ),
      headerLeft: () => (
        <View style={{marginLeft: 10}}>
          <BackIcon
            image={icons.downIcon}
            onPress={() => navigation.goBack()}
          />
        </View>
      ),
      headerTitle: () => (
        <View style={styles.headingStyle}>
          <Text style={styles.headingTitle}>
            {trackData ? `"${trackData.name}"` : 'Loading...'}
          </Text>
        </View>
      ),
    });
  }, [navigation, trackData]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(
      2,
      '0',
    )}`;
  };

  return (
    <ScrollView style={{flex: 1}}>
      <LinearGradient
        colors={['#696060', '#535151', '#161515']}
        style={styles.linearStyle}>
        <View>
          <Image
            source={require('../../Utils/Images/Ed_Sheeran.jpg')}
            style={styles.mainImgStyle}
          />
        </View>
        <View style={styles.middlecontainHead}>
          <Text style={styles.middlecontainHead}>
            {trackData
              ? `${trackData.name} (with ${trackData.artists[0]?.name})`
              : 'Loading...'}
          </Text>
          <Text style={styles.middlecontainHead}>
            {trackData
              ? trackData.artists.map((artist: any) => artist.name).join(', ')
              : ''}
          </Text>
        </View>

        <Slider
          style={{width: 350, height: 40, marginLeft: 30}}
          minimumValue={0}
          maximumValue={duration}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          thumbTintColor="#FFFFFF"
          value={position}
          onValueChange={value => {
            setPosition(value);
            handleSeek(value);
          }}
        />
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>{formatTime(position)}</Text>
          <Text style={styles.timeText}>
            {trackData ? formatTime(duration) : '00:00'}
          </Text>
        </View>
        <View style={styles.imgcontain}>
          <TouchableOpacity>
            <Image
              source={require('../../Utils/Images/shufle_icon.png')}
              style={styles.shuffleimg}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePreviousTrack}>
            <Image
              source={require('../../Utils/Images/previous_icon.png')}
              style={styles.arrowrightimg}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={togglePlayback}>
            <Image
              style={styles.pauseimg}
              source={
                isPlaying
                  ? require('../../Utils/Images/pause_icon.png')
                  : require('../../Utils/Images/stop_icon.png')
              }
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNextTrack}>
            <Image
              source={require('../../Utils/Images/next_icon.png')}
              style={styles.arrowlefyimg}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../Utils/Images/loop_icon.png')}
              style={styles.loopImg}
            />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <TouchableOpacity>
            <Image
              source={require('../../Utils/Images/cast_icon.png')}
              style={styles.castimg}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../Utils/Images/share_icon.png')}
              style={styles.shareimg}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default MusicPlayerScreen;
