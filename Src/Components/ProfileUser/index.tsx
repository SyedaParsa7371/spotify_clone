import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { getAlbum } from '../../Utils/Http/Api'; // Adjust import path as necessary

const AlbumList = () => {
  const [albums, setAlbums] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getAlbum();
        console.log('Fetched albums:', data); // Log full response data for debugging

        if (data && Array.isArray(data)) {
          setAlbums(data);
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
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <Text style={styles.errorText}>No image available</Text>
        )}
        <Text style={styles.name}>{item.name || 'Unknown'}</Text>
        <Text style={styles.artists}>Artists: {item.artists.map((artist: any) => artist.name).join(', ') || 'Unknown'}</Text>
        <Text style={styles.releaseDate}>Release Date: {item.release_date || 'Unknown'}</Text>
      </View>
    );
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  return (
    <FlatList
      data={albums}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
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
    color: 'red',
  },
});

export default AlbumList;
