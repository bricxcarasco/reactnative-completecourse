import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

import useRestaurants from "../hooks/useRestaurants";

import SearchBar from "../components/SearchBar";
import RestaurantList from "../components/RestaurantList";

const SearchScreen = () => {
  const [term, onTerm] = useState("");
  const [searchApi, restaurants, errorMessage] = useRestaurants();

  const filterRestaurantsByPrice = (price) => {
    return restaurants.filter((restaurant) => {
      return restaurant.price === price;
    });
  };

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTerm={onTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <RestaurantList
          title="Cost Effective"
          restaurants={filterRestaurantsByPrice("$")}
        />
        <RestaurantList
          title="Bit Pricier"
          restaurants={filterRestaurantsByPrice("$$")}
        />
        <RestaurantList
          title="Big Spender"
          restaurants={filterRestaurantsByPrice("$$$")}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SearchScreen;
