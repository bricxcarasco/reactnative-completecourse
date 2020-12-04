import React from "react";
import { StyleSheet, View, Text } from "react-native";

const ShowScreen = ({ navigation }) => {
  const {
    state: {
      params: { id, title },
    },
  } = navigation;
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
