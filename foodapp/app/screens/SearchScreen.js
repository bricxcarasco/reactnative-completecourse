import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

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
    <View>
      <SearchBar
        term={term}
        onTerm={onTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {restaurants.length} restaurants.</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
