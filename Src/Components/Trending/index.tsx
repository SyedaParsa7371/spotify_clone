import React from 'react';
import { View, TouchableOpacity, Image, Text, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import styles from './style';
import { data } from '../../Utils/Data';



function LatestSong() {
  const navigation = useNavigation();

  const renderItem = ({ item }:any) => (
    <View style={styles.trendingInnerContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("Play List Screen")}>
        <Image
          source={item.image}
          style={{ width: 150, height: 175 }}
        />
      </TouchableOpacity>
      <Text style={styles.trendingTitle}>{item.title}</Text>
      <Text style={styles.trendingText}>{item.text}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.trendingContainer}
      />
    </View>
  );
}


export default LatestSong;
