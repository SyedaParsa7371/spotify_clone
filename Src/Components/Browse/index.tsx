import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import styles from "./style";

function Browse() {

    
  return (
    <ScrollView>
      <View style={styles.rootcontainer}>
        <TouchableOpacity style={styles.browseContainer}>
          <Text style={styles.browseText}>Prop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.browseContainer}>
          <Text style={styles.browseText}>Prop</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rootcontainer}>
        <TouchableOpacity style={styles.browseContainer}>
          <Text style={styles.browseText}>Prop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.browseContainer}>
          <Text style={styles.browseText}>Prop</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rootcontainer}>
        <TouchableOpacity style={styles.browseContainer}>
          <Text style={styles.browseText}>Prop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.browseContainer}>
          <Text style={styles.browseText}>Prop</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rootcontainer}>
        <TouchableOpacity style={styles.browseContainer}>
          <Text style={styles.browseText}>Prop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.browseContainer}>
          <Text style={styles.browseText}>Prop</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default Browse;
