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
  
    // Define a character limit for the first line
    const charLimit = 20;
    const albumName = item.name || 'Unknown';
    const firstPart = albumName.slice(0, charLimit);
    const secondPart = albumName.slice(charLimit);
  
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Play List Screen', { albumId: item.id })}
        >
          {imageUri ? (
            <Image source={require('../../Utils/Images/Ed_Sheeran.jpg')} style={styles.image} />
          ) : (
            <Text style={styles.errorText}>No image available</Text>
          )}
          <Text style={styles.name}>{firstPart}</Text>
          {secondPart.length > 0 && <Text style={styles.name}>{secondPart}</Text>}
          <Text style={styles.artists}>
            Artists: {item.artists.map((artist: any) => artist.name).join(', ') || 'Unknown'}
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
