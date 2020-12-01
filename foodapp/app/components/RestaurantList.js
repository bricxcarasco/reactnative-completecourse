import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";

import RestaurantItem from "./RestaurantItem";

const RestaurantList = ({ title, restaurants, navigation }) => {
  if (!restaurants.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(restaurant) => restaurant.id}
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { id: item.id })
              }
            >
              <RestaurantItem detail={item} />
            </TouchableOpacity>
          );
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

export default withNavigation(RestaurantList);
