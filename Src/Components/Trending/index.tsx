import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getSeveralTracks } from '../../Utils/Http/Api'; // Adjust import path as necessary

const PlayListSong = () => {
  const navigation = useNavigation();
  const [tracks, setTracks] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTracks = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getSeveralTracks();
        console.log('API Response:', data); // Log the response for debugging
        setTracks(data); // Set the tracks data directly
      } catch (err) {
        setError('Failed to fetch tracks. Check console for more details.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTracks();
  }, []);

  const renderItem = ({ item }: any) => (
    <View style={styles.trendingInnerContainer}>
      <TouchableOpacity onPress={()=>navigation.navigate('')}>
        <Image
          source={{ uri: item.album.images[0]?.url }} // Use album image URL
          style={{ width: 100, height: 120 }}
          onError={(error) => console.log('Error loading image:', error.nativeEvent.error)} // Log image load errors
        />
      </TouchableOpacity>
      <Text style={styles.trendingTitle}>{item.name}</Text>
      <Text style={styles.trendingText}>{item.artists.map((artist: any) => artist.name).join(', ')}</Text>
    </View>
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#fafafa" />;
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  return (
    <View>
      <FlatList
        data={tracks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.trendingContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  trendingContainer: {
    padding: 20,
  },
  trendingInnerContainer: {
    marginRight: 20,
    alignItems: 'center',
  },
  trendingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white',
  },
  trendingText: {
    fontSize: 14,
    color: '#fdfbfb',
    textAlign: 'center',
    marginTop: 5,
  },
  errorText: {
    textAlign: 'center',
    color: 'red',
    fontSize: 16,
  },
});

export default PlayListSong;
