import React from "react";
import { View, Text, FlatList } from "react-native";

const FlatlistScreen = () => {
  const friends = [
    {
      id: Math.floor(Math.random() * 1000000000).toString(),
      name: "Friend #1",
    },
    {
      id: Math.floor(Math.random() * 1000000000).toString(),
      name: "Friend #2",
    },
    {
      id: Math.floor(Math.random() * 1000000000).toString(),
      name: "Friend #3",
    },
    {
      id: Math.floor(Math.random() * 1000000000).toString(),
      name: "Friend #4",
    },
    {
      id: Math.floor(Math.random() * 1000000000).toString(),
      name: "Friend #5",
    },
    {
      id: Math.floor(Math.random() * 1000000000).toString(),
      name: "Friend #6",
    },
    {
      id: Math.floor(Math.random() * 1000000000).toString(),
      name: "Friend #7",
    },
    {
      id: Math.floor(Math.random() * 1000000000).toString(),
      name: "Friend #8",
    },
    {
      id: Math.floor(Math.random() * 1000000000).toString(),
      name: "Friend #9",
    },
  ];
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={friends}
        renderItem={({ item: { name } }) => {
          return <Text>{name}</Text>;
        }}
      />
    </View>
  );
};

export default FlatlistScreen;
