import React, { useReducer, useEffect } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTerm, onTermSubmit }) => {
  const onSearch = (searchValue) => {
    onTerm(searchValue);
  };

  return (
    <View style={styles.viewBackground}>
      <Feather style={styles.iconSearch} name="search" />
      <TextInput
        style={styles.inputSearch}
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onChangeText={onSearch}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewBackground: {
    backgroundColor: "#E0E0E0",
    height: 50,
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 10,
    marginHorizontal: 10,
    flexDirection: "row",
  },
  iconSearch: {
    alignSelf: "center",
    marginHorizontal: 15,
    fontSize: 35,
  },
  inputSearch: {
    flex: 1,
    fontSize: 18,
  },
});

export default SearchBar;
