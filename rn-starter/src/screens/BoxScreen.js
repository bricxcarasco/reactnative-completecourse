import React from "react";
import { StyleSheet, View, Text } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Box screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
  },
  textStyle: {
    borderWidth: 5,
    borderColor: "red",
    margin: 20,
    padding: 10,
  },
});

export default BoxScreen;
