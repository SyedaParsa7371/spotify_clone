import React, {useState, useEffect, useLayoutEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {getAlbum} from '../../Utils/Http/Api'; // Adjust import path as necessary
import {useNavigation} from '@react-navigation/native';

const AlbumList = () => {
  const [albums, setAlbums] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const navigation = useNavigation();
  useLayoutEffect(() => {
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
        // onPress={() => navigation.navigate('Play List Screen', { albumId: item.id })} // Pass albumId here

          onPress={() => navigation.navigate('Play List Screen', { albumId: item.id })} // Pass albumId here
        >
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.image} />
          ) : (
            <Text style={styles.errorText}>No image available</Text>
          )}
          <Text style={styles.name}>{item.name || 'Unknown'}</Text>
          <Text style={styles.artists}>
            Artists:{' '}
            {item.artists.map((artist: any) => artist.name).join(' , ') || 'Unknown'}
          </Text>
          <Text style={styles.releaseDate}>
            Release Date: {item.release_date || 'Unknown'}
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
    marginBottom: 20,
    marginHorizontal: 18,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  artists: {
    fontSize: 16,
    color: 'white',
  },
  releaseDate: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
  },
  errorText: {
    textAlign: 'center',
    fontSize:16,
    color: 'red',
  },
});

export default AlbumList;
