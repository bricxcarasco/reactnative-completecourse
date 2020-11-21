import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const FlatlistScreen = () => {
  const friends = [
    {
      id: Math.floor(Math.random() * 1000000000).toString(),
      name: "Person #1",
      age: 21,
    },
    {
      id: Math.floor(Math.random() * 1000000000).toString(),
      name: "Person #2",
      age: 22,
    },
    {
      id: Math.floor(Math.random() * 1000000000).toString(),
      name: "Person #3",
      age: 23,
    },
    {
      id: Math.floor(Math.random() * 1000000000).toString(),
      name: "Person #4",
      age: 24,
    },
    {
      id: Math.floor(Math.random() * 1000000000).toString(),
      name: "Person #5",
      age: 25,
    },
    {
      id: Math.floor(Math.random() * 1000000000).toString(),
      name: "Person #6",
      age: 26,
    },
    {
      id: Math.floor(Math.random() * 1000000000).toString(),
      name: "Person #7",
      age: 27,
    },
  ];
  return (
    <View>
      <FlatList
        keyExtractor={(friend) => friend.id}
        data={friends}
        renderItem={({ item: { name, age } }) => {
          return (
            <Text style={styles.flatlistText}>
              {name} - Age {age}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatlistText: {
    marginVertical: 50,
  },
});

export default FlatlistScreen;
