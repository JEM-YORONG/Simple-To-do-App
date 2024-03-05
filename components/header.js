import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function App() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>To-Do List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    paddingTop: 20,
    backgroundColor: "maroon",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
