import React from "react";
import { StyleSheet, View, Text } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.parentViewStyle}>
      <View style={styles.viewStyle1} />
      <View style={styles.viewStyle2} />
      <View style={styles.viewStyle3} />
    </View>
  );
};

const styles = StyleSheet.create({
  parentViewStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewStyle1: {
    borderWidth: 3,
    borderColor: "red",
    backgroundColor: "red",
    height: 50,
    width: 50,
  },
  viewStyle2: {
    borderWidth: 3,
    borderColor: "green",
    backgroundColor: "green",
    height: 50,
    width: 50,
    top: 50,
  },
  viewStyle3: {
    borderWidth: 3,
    borderColor: "purple",
    backgroundColor: "purple",
    height: 50,
    width: 50,
  },
});

export default BoxScreen;
