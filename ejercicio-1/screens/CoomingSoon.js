import { View, Text, StyleSheet } from "react-native";
import React from "react";

export function CoomingSoon() {
  return (
    <View style={styles.container}>
      <Text>CoomingSoon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
