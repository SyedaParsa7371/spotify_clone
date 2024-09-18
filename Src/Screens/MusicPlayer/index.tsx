import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { BackIcon } from '../../Components/IconButton';
import { icons } from '../../Utils/Images';
import IoniconsIcon from '../../Components/IoniconButton';
import styles from './style';
import { useNavigation, useRoute } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import { getTrack } from '../../Utils/Http/Api';

function MusicPlayerScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { songId } = route.params; 
  const [pause, setPause] = useState(false);
  const [trackData, setTrackData] = useState(null); // State for track data

  function Ontoggle() {
    setPause(!pause);
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons
          name="ellipsis-vertical-outline"
          size={24}
          color="white"
          onPress={() => {
            // Define your action here
          }}
        />
      ),
      headerLeft: () => (
        <View style={{ marginLeft: 10 }}>
          <BackIcon
            image={icons.downIcon}
            onPress={() => navigation.goBack()}
          />
        </View>
      ),
      headerTitle: () => (
        <View style={styles.headingStyle}>
          <Text style={styles.headingTitle}>{trackData ? trackData.name : 'Loading...'}</Text>
          <Text style={styles.headingText}>{trackData ? trackData.artists.map(artist => artist.name).join(', ') : ''}</Text>
        </View>
      ),
    });
  }, [navigation, trackData]); 

  useEffect(() => {
    console.log('Song ID:', songId);
    const fetchTrack = async () => {
      try {
        const data = await getTrack(songId); 
        console.log('Track Data:', data);
        setTrackData(data); 
      } catch (error) {
        console.error('Error fetching track data:', error);
      }
    };

    fetchTrack();
  }, [songId]);

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: { display: 'none' },
    });
    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          backgroundColor: 'transparent',
          position: 'absolute',
          borderTopWidth: 0,
          left: 0,
          right: 0,
          bottom: 0,
          elevation: 0,
        },
      });
    };
  }, [navigation]);

  return (
    <ScrollView>
      <LinearGradient
        colors={['#696060', '#535151', '#161515']}
        style={styles.linearStyle}>
        <View>
          <Image
            source={require('../../Utils/Images/Ed_Sheeran.jpg')}
            style={styles.mainImgStyle}
          />
        </View>

        <View style={styles.middlecontainer}>
          <View>
            <Text style={styles.middlecontainHead}>
              {trackData ? trackData.name : 'Loading...'}
            </Text>
            <Text style={styles.middlecontainHead}>
              {trackData ? trackData.artists.map(artist => artist.name).join(', ') : ''}
            </Text>
          </View>
          <View style={styles.middleconticon}>
            <IoniconsIcon name="heart-outline" color="white" />
          </View>
        </View>

        <View>
          <Slider
            style={{ width: 350, height: 40, marginLeft: 30 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            thumbTintColor="#FFFFFF"
          />
        </View>

        {/* Control Buttons */}
        <View style={styles.imgcontain}>
          <TouchableOpacity>
            <Image
              source={require('../../Utils/Images/shufle_icon.png')}
              style={styles.shuffleimg}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../Utils/Images/previous_icon.png')}
              style={styles.arrowrightimg}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={Ontoggle}>
            <Image
              style={styles.pauseimg}
              source={
                pause
                  ? require('../../Utils/Images/pause_icon.png')
                  : require('../../Utils/Images/stop_icon.png')
              }
            />
          </TouchableOpacity>
          <TouchableOpacity>
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

        {/* Additional Controls */}
        <View style={{ flexDirection: 'row' }}>
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

        {/* Lyrics */}
        <View style={styles.lyricscontainer}>
          <Text style={styles.lyricstext}>Lyrics</Text>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

export default MusicPlayerScreen;
