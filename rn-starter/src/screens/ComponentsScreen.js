import React from "react";
import { StyleSheet, View, Text } from "react-native";

const ComponentsScreen = () => {
  const name = "Rain";
  return (
    <View>
      <Text style={styles.headerText}>Hello to React Native!</Text>
      <Text style={styles.nameText}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 30,
  },
  nameText: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
