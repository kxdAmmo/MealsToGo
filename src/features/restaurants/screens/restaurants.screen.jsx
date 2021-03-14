import React from "react";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <Searchbar placeholder="Search" />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard />
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
    marginTop: ANDROID_TOP_MARGIN,
  },

  list: {
    padding: 16,
    backgroundColor: "blue",
    flex: 1,
  },
});
