import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

import RestaurantItem from "./RestaurantItem";

const RestaurantList = ({ title, restaurants }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(restaurant) => restaurant.id}
        data={restaurants}
        renderItem={({ item }) => {
          return <RestaurantItem detail={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  textTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 5,
  },
});

export default RestaurantList;
