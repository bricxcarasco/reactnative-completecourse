import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const RestaurantItem = ({ detail }) => {
  return (
    <View style={styles.containerRestaurant}>
      <Image
        style={styles.imageRestaurant}
        source={{ uri: detail.image_url }}
      />
      <Text style={styles.textNameRestaurant}>{detail.name}</Text>
      <Text style={styles.textRatingReviewRestaurant}>
        {detail.rating} Stars, {detail.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerRestaurant: {
    marginLeft: 10,
  },
  imageRestaurant: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  textNameRestaurant: {
    fontWeight: "bold",
    marginBottom: 3,
  },
  textRatingReviewRestaurant: {},
});

export default RestaurantItem;
