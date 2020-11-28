import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import RestaurantList from "../components/RestaurantList";

import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, onTerm] = useState("");

  const onTermSubmit = () => {
    console.log(term);
  };

  return (
    <View>
      <SearchBar term={term} onTerm={onTerm} onTermSubmit={onTermSubmit} />
      <RestaurantList />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
