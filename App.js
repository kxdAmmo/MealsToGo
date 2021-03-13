import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchBar}>
          <Text>Search</Text>
        </View>
        <View style={styles.list}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

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
