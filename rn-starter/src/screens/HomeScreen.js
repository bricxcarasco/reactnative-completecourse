import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate("Flatlist")}
      />
      <Button
        title="Go to Image Demo"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
        title="Go to Counter Demo"
        onPress={() => navigation.navigate("Counter")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
