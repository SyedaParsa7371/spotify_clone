import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getRecommendations } from '../../Utils/Http/Api'; // Adjust import path as necessary

const RecentSong = () => {
  const navigation = useNavigation();
  const [tracks, setTracks] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecommendations = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getRecommendations();
        console.log('Fetched recommendations:', data); // Log data for debugging

        if (data && Array.isArray(data)) {
          setTracks(data);
        } else {
          setError('Unexpected data structure received.');
        }
      } catch (err) {
        setError('Failed to fetch recommendations. Check console for more details.');
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, []);

  const renderItem = ({ item }: { item: any }) => {
    const previewUrl = item.preview_url; // Check for preview URL

    // Only render the item if the preview URL exists
    if (!previewUrl) {
      return null; // Don't render anything if no preview URL
    }

    return (
      <View style={styles.recentInnerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Music Player Screen', { songId: item.id })}>
          <Image
            source={ require('../../Utils/Images/Ed_Sheeran.jpg') } 
            style={{ width: 150, height: 150 }}
            onError={(error) => console.log('Error loading image:', error.nativeEvent.error)} 
          />
        </TouchableOpacity>
        <Text style={styles.recentTitle}>{item.name}</Text>
        <Text style={styles.recentText}>{item.artists.map((artist: any) => artist.name).join(', ')}</Text>
      </View>
    );
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#ffffff" />;
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  return (
    <FlatList
      data={tracks}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.recentContainer}
    />
  );
};

const styles = StyleSheet.create({
  recentContainer: {
    padding: 20,
  },
  recentInnerContainer: {
    marginRight: 20,
    alignItems: 'center',
  },
  recentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white',
  },
  recentText: {
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

export default RecentSong;
