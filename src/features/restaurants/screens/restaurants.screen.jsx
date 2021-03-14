import React from "react";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import { SearchBar } from "react-native-paper";

import { RestaurantInfo } from "../components/restaurant-info.component";

export const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <Text>Search</Text>
        <SearchBar />
      </View>
      <View style={styles.list}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
};

const ANDROID_TOP_MARGIN = StatusBar.currentHeight;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  searchBar: {
    padding: 16,
    backgroundColor: "green",
    marginTop: ANDROID_TOP_MARGIN,
  },

  list: {
    padding: 16,
    backgroundColor: "blue",
    flex: 1,
  },
});
