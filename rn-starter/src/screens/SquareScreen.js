import React, { useState } from "react";
import { Alert } from "react-native";
import { StyleSheet, View, Text, Alsert } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 5;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const [boxColor, setBoxColor] = useState("");

  const setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        break;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        break;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        break;
      default:
        Alert.alert("Invalid color", "This is a invalid color", { text: "Ok" });
        break;
    }
    setBoxColor(`rgb(${red}, ${green}, ${blue})`);
  };

  const colors = ["Red", "Green", "Blue"];

  const moreColorHandler = (color) => {
    setColor(color.toLowerCase(), COLOR_INCREMENT);
  };

  const lessColorHandler = (color) => {
    setColor(color.toLowerCase(), -1 * COLOR_INCREMENT);
  };

  console.log(boxColor);

  return (
    <View>
      <FlatList
        keyExtractor={(item) => Math.floor(Math.random() * 1000000).toString()}
        data={colors}
        renderItem={({ item }) => {
          return (
            <ColorCounter
              moreColor={moreColorHandler}
              lessColor={lessColorHandler}
              color={item}
            />
          );
        }}
      />
      <View style={{ ...styles.colorBox, backgroundColor: boxColor }} />
    </View>
  );
};

const styles = StyleSheet.create({
  colorBox: {
    height: 100,
    width: 100,
  },
});

export default SquareScreen;
