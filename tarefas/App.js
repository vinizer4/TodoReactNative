import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Matheus</Text>
      <Text style={styles.title}>Sujeito Programador</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    paddingTop: 28,
  },
  title: {
    fontSize: 32,
    color: "#121212",
    fontWeight: "bold",
  },
});
