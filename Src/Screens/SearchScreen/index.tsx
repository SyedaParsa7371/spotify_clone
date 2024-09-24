import React, { useState, useEffect } from "react";
import { ScrollView, SectionList, Text, View, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import SearchBar from "../../Components/SearchBar";
import CardTop from "../../Components/CardTop";
import styles from "./style";
import { getSpotifyCategories, getSpotifyGenres } from "../../Utils/Http/Api";

const chunkArray = (data: any[], chunkSize: number) => {
  const chunks = [];
  for (let i = 0; i < data.length; i += chunkSize) {
    chunks.push(data.slice(i, i + chunkSize));
  }
  return chunks;
};

function SearchScreen() {
  const [categories, setCategories] = useState<string[]>([]);
  const [genres, setGenres] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const numColumns = 2;

  const updatedData = [
    {
      title: 'Top Genres',
      data: chunkArray(genres, numColumns),
    },
    {
      title: 'Browse All',
      data: chunkArray(categories, numColumns),
    },
  ];

  const renderItem = ({ item }: any) => (
    <View style={localStyles.itemContainer}>
      <CardTop>{item}</CardTop>
    </View>
  );

  const renderSectionHeader = ({ section: { title } }: { section: { title: string } }) => (
    <Text style={styles.searchTexts}>{title}</Text>
  );

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getSpotifyCategories();
        const fetchedCategories = data.categories.items.map((category: any) => category.name);
        setCategories(fetchedCategories);
      } catch (err) {
        setError('Failed to fetch categories. Check console for more details.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    const fetchGenres = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getSpotifyGenres();
        const fetchedGenres = data.genres; 
        setGenres(fetchedGenres);
      } catch (err) {
        setError('Failed to fetch genres. Check console');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
    fetchGenres();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return (
      <View style={styles.scrollStyle}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.scrollStyle}>
      <View style={styles.searchContainer}>
        <Text style={styles.searchText}>Search</Text>
        <SearchBar />
      </View>

      <SectionList
        sections={updatedData}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={renderSectionHeader}
        renderItem={({ item }) => (
          <FlatList
            data={item}
            renderItem={renderItem}
            keyExtractor={(item, index) => item + index}
            numColumns={numColumns}
            scrollEnabled={false}
          />
        )}
      />
    </View>
  );
}

const localStyles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    padding: 4,
  },
});

export default SearchScreen;
