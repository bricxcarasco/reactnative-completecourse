import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import RestaurantList from "../components/RestaurantList";

import yelp from "../api/yelp";

import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, onTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
      setErrorMessage("");
    } catch (err) {
      setErrorMessage("Something went wrong!");
    }
  };

  useEffect(() => {
    searchApi("food");
  });

  return (
    <View>
      <SearchBar
        term={term}
        onTerm={onTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results.</Text>
      <RestaurantList />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
