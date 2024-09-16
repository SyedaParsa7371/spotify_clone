import React, { useState, useEffect } from "react";
import { ScrollView, SectionList, Text, View, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import SearchBar from "../../Components/SearchBar";
import CardTop from "../../Components/CardTop";
import styles from "./style";
import { getSpotifyCategories, getSpotifyGeneres } from "../../Utils/Http/Api";

const chunkyArray = (data: any[], chunkSize: number) => {
  const chunks = [];
  for (let i = 0; i < data.length; i += chunkSize) {
    chunks.push(data.slice(i, i + chunkSize));
  }
  return chunks;
};

function SearchScreen() {
  const [categories, setCategories] = useState<any[]>([]);
  const [genere, setGenere] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const numColumns = 2;

  const updatedDatas = [
    {
      title: 'Top Genres',
      data: chunkyArray(genere, numColumns),
    },
    {
      title: 'Browse All',
      data: chunkyArray(categories, numColumns),
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

    const fetchGeneres = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getSpotifyGeneres();
        const fetchedGeneres = data.genres.map((genere: any) => genere); // Adjust based on actual response structure
        setGenere(fetchedGeneres);
      } catch (err) {
        setError('Failed to fetch genres. Check console');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
    fetchGeneres();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <ScrollView style={styles.scrollStyle}>
      <View style={styles.searchContainer}>
        <Text style={styles.searchText}>Search</Text>
        <SearchBar />
      </View>

      <SectionList
        sections={updatedDatas}
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
    </ScrollView>
  );
}

const localStyles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    padding: 10,
  },
});

export default SearchScreen;
