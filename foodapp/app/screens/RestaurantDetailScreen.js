import React, { useState, useEffect } from "react";
import { Image } from "react-native";
import { StyleSheet, View, Text, FlatList } from "react-native";

import yelp from "../api/yelp";

const RestaurantDetailScreen = ({ navigation }) => {
  const [restaurantDetail, setRestaurantDetail] = useState(null);
  const id = navigation.getParam("id");

  const getRestaurantDetails = async (id) => {
    const response = await yelp.get(`/${id}`);
    setRestaurantDetail(response.data);
  };

  useEffect(() => {
    getRestaurantDetails(id);
  }, []);

  if (!restaurantDetail) {
    return null;
  }

  return (
    <View>
      <Text>{restaurantDetail.name}</Text>
      <FlatList
        keyExtractor={(photo) => photo}
        data={restaurantDetail.photos}
        renderItem={({ item }) => {
          return (
            <Image
              style={styles.imageRestaurantDetail}
              source={{ uri: item }}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageRestaurantDetail: {
    width: 300,
    height: 200,
  },
});

export default RestaurantDetailScreen;
