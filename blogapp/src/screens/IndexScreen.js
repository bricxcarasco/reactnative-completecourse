import React, { useContext } from "react";
import { StyleSheet, View, Text, FlatList, Button } from "react-native";

import { Context } from "../context/BlogContext";

import BlogList from "../components/BlogList";

const IndexScreen = ({ navigation }) => {
  const { state, addBlogPost } = useContext(Context);

  const goToShowScreen = (blogPost) => {
    navigation.navigate("Show", blogPost);
  };

  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        keyExtractor={(blogPost) => blogPost.id}
        data={state}
        renderItem={({ item }) => {
          return <BlogList goToShowScreen={goToShowScreen} blogPost={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
