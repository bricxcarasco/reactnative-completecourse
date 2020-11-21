import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  const addColorHandler = () => {
    setColors([...colors, randomRGB()]);
  };

  return (
    <View>
      <Button title="Add a Color" onPress={addColorHandler} />
      <FlatList
        keyExtractor={(item) => Math.floor(Math.random() * 1000000).toString()}
        data={colors}
        renderItem={({ item }) => {
          return <View style={{ ...styles.colorBox, backgroundColor: item }} />;
        }}
      />
    </View>
  );
};

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
  colorBox: {
    height: 100,
    width: 100,
  },
});

export default ColorScreen;
