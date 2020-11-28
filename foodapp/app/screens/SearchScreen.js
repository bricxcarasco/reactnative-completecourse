import React from "react";
import { StyleSheet, View, Text } from "react-native";
import RestaurantList from "../components/RestaurantList";

import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  return (
    <View>
      <SearchBar />
      <RestaurantList />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
