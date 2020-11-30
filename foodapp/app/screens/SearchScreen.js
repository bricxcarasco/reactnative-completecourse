import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import useRestaurants from "../hooks/useRestaurants";

import SearchBar from "../components/SearchBar";
import RestaurantList from "../components/RestaurantList";

const SearchScreen = () => {
  const [term, onTerm] = useState("");
  const [searchApi, restaurants, errorMessage] = useRestaurants();

  return (
    <View>
      <SearchBar
        term={term}
        onTerm={onTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {restaurants.length} restaurants.</Text>
      <RestaurantList restaurants={restaurants} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
