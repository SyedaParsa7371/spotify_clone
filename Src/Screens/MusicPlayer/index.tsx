import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { BackIcon } from '../../Components/IconButton';
import { icons } from '../../Utils/Images';
import IoniconsIcon from '../../Components/IoniconButton';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function MusicPlayerScreen() {
  const navigation = useNavigation();
  const[pause,setPause] =useState(false)
  
  function Ontoggle() {
    setPause(!pause)
}

  useEffect(() => {
    // Set header options using useEffect
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
        <BackIcon 
          image={icons.downIcon} 
          onPress={() => navigation.goBack()} 
        />
      ),
      headerTitle: () => (
        <View style={styles.headingStyle}>
          <Text style={styles.headingTitle}>PLAYING FROM SEARCH</Text>
          <Text style={styles.headingText}>"stay" in Songs</Text>
        </View>
      )
    });
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
          <Text style={styles.middlecontainHead} >
            STAY (with Justin Bieber)
          </Text>
          <Text style={styles.middlecontainHead}>
            The Kid LAROI, Justin Bieber
          </Text>
        </View>
        <IoniconsIcon name="heart-outline" color="white" />
      </View>

      <View>
        <Image
          source={require('../../Utils/Images/Timer.png')}
          style={styles.timeimg}
        />
      </View>

      {/* Control Buttons */}
      <View style={styles.imgcontain}>
        <Image
          source={require('../../Utils/Images/shufle_icon.png')}
          style={styles.shuffleimg}
        />
        <Image
          source={require('../../Utils/Images/previous_icon.png')}
          style={styles.arrowrightimg}
        />
       
        <TouchableOpacity onPress={Ontoggle} >
          <Image style={styles.pauseimg} source={pause ? require('../../Utils/Images/pause_icon.png') : require('../../Utils/Images/stop_icon.png')} />
          </TouchableOpacity>
        {/* <Image
          source={require('../../Utils/Images/stop_icon.png')}
          style={styles.pauseimg}
        /> */}
        
        <Image
          source={require('../../Utils/Images/next_icon.png')}
          style={styles.arrowlefyimg}
        />
        <Image
          source={require('../../Utils/Images/loop_icon.png')}
          style={styles.loopImg}
        />
      </View>

      {/* Additional Controls */}
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../../Utils/Images/cast_icon.png')}
          style={styles.castimg}
        />
        <Image
          source={require('../../Utils/Images/share_icon.png')}
          style={styles.shareimg}
        />
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
