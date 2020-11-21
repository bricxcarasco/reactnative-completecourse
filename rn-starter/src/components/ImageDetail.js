import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const ImageDetail = ({ imageDetail: { title, image, score } }) => {
  return (
    <View>
      <Image source={image} />
      <Text>{title}</Text>
      <Text>Image score - {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
