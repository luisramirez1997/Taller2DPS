import { View, Text, StyleSheet } from "react-native";
import React from "react";

export function CoomingSoon() {
  return (
    <View style={styles.container}>
      
      <Text
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      Proximamente
                    </Text>
                    <Text
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      Nuestros Estrenos 2022
                    </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a2866bb8",
    alignItems: "center",
    justifyContent: "center",
  },
});
