import React from "react";
import { StyleSheet, View, Text } from "react-native";

const RestaurantList = ({ title, restaurants }) => {
  return (
    <View>
      <Text style={styles.textTitle}>{title}</Text>
      <Text>{restaurants.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default RestaurantList;
