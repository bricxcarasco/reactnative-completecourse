import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";

import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
  const [blogPost, setBlogPost] = useState({});
  const { state } = useContext(Context);

  const id = navigation.getParam("id");

  useEffect(() => {
    const post = state.find((statePost) => {
      return statePost.id === id;
    });
    setBlogPost(post);
  }, []);

  if (!blogPost) {
    return null;
  }

  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
