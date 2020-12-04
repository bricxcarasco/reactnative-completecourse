import React, { useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import { Context } from "../context/BlogContext";

const BlogList = ({ blogPost, goToShowScreen }) => {
  const { deleteBlogPost } = useContext(Context);

  return (
    <View style={styles.viewContainerBlogList}>
      <TouchableOpacity onPress={() => goToShowScreen(blogPost)}>
        <Text style={styles.textTitle}>{blogPost.title}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deleteBlogPost(blogPost.id)}>
        <Feather style={styles.iconDelete} name="trash-2" size={18} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainerBlogList: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    margin: 5,
    borderColor: "black",
    borderWidth: 1,
  },
  textTitle: {
    fontSize: 18,
  },
});

export default BlogList;
