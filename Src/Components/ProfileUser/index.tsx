import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { getAlbum } from '../../Utils/Http/Api'; // Adjust import path as necessary
import { useNavigation } from '@react-navigation/native';

const AlbumList = () => {
  const [albums, setAlbums] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const navigation = useNavigation();

  useEffect(() => {
    const fetchAlbums = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getAlbum();
        console.log('Fetched albums:', data); // Log full response data for debugging

        if (data && data.items && Array.isArray(data.items)) {
          setAlbums(data.items);
        } else {
          setError('Unexpected data structure received.');
        }
      } catch (err) {
        setError('Failed to fetch albums. Check console for more details.');
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  const renderItem = ({ item }: any) => {
    if (!item || !item.images || !item.images.length) {
      return <Text style={styles.errorText}>No data available</Text>;
    }

    const imageUri = item.images[0]?.url || '';

    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Play List Screen', { albumId: item.id })
          }>
          {imageUri ? (
            <Image
              source={require('../../Utils/Images/Ed_Sheeran.jpg')}
              style={styles.image}
            />
          ) : (
            <Text style={styles.errorText}>No image available</Text>
          )}
          <Text
            style={styles.names}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {item.name || 'Unknown'}
          </Text>

          <Text
            style={styles.artists}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Artists:{' '}
            {item.artists.map((artist: any) => artist.name).join(', ') ||
              'Unknown'}
          </Text>
        </TouchableOpacity>
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
      data={albums}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 20,
  },
  itemContainer: {
    marginBottom: 10,
    marginHorizontal: 18,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
  names: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    width: 150,
  },
  artists: {
    fontSize: 16,
    color: 'white',
    width: 150, 
  },
  errorText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'red',
  },
});

export default AlbumList;
