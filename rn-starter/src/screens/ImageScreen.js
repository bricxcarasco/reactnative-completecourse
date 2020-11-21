import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  const imageDetail = [
    {
      id: Math.floor(Math.random() * 100000).toString(),
      title: "Forest",
      image: require("../../assets/images/forest.jpg"),
      score: 6,
    },
    {
      id: Math.floor(Math.random() * 100000).toString(),
      title: "Beach",
      image: require("../../assets/images/beach.jpg"),
      score: 8,
    },
    {
      id: Math.floor(Math.random() * 100000).toString(),
      title: "Mountain",
      image: require("../../assets/images/mountain.jpg"),
      score: 2,
    },
  ];

  return (
    <View>
      <FlatList
        keyExtractor={(detail) => detail.id}
        data={imageDetail}
        renderItem={({ item }) => {
          console.log(item);
          return <ImageDetail imageDetail={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
