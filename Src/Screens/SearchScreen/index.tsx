import React from "react";
import { ScrollView, SectionList, Text, View, FlatList, StyleSheet } from "react-native";
import SearchBar from "../../Components/SearchBar";
import CardTop from "../../Components/CardTop";
import { DATAS } from "../../Utils/Data";
import styles from "./style";

// Function to chunk data into rows with a specific number of columns
const chunkyArray = (data, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < data.length; i += chunkSize) {
    chunks.push(data.slice(i, i + chunkSize));
  }
  return chunks;
};

function SearchScreen() {
  const numColumns = 2; // Define the number of columns

  const renderItem = ({ item }:any) => (
    <View style={localStyles.itemContainer}>
      <CardTop >{item}</CardTop>
    </View>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.searchTexts}>{title}</Text>
  );

  return (
    <ScrollView style={styles.scrollStyle}>
      <View style={styles.searchContainer}>
        <Text style={styles.searchText}>Search</Text>
        <SearchBar />
      </View>

      {/* Uncomment if needed */}
      {/* <View style={styles.topContainer}>
        <Text style={styles.topText}>Your top genres</Text>
        <TopCard />
      </View>

      <View style={styles.topContainer}>
        <Text style={styles.topText}>Browse all</Text>
        <Browse />
      </View> */}

      <SectionList
        sections={DATAS.map((section) => ({
          title: section.title,
          data: chunkyArray(section.data, numColumns), 
        }))}
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
