import React, { useReducer } from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import ColorCounter from "../components/ColorCounter";

import ColorReducer from "../reducers/colorReducer";

const COLOR_INCREMENT = 5;
const INITIAL_STATE = { red: 0, green: 0, blue: 0 };

const colors = ["Red", "Green", "Blue"];

const SquareScreen = () => {
  const [state, dispatch] = useReducer(ColorReducer, INITIAL_STATE);
  const { red, green, blue } = state;

  const moreColorHandler = (color) => {
    dispatch({
      type: color.toLowerCase(),
      payload: COLOR_INCREMENT,
    });
  };

  const lessColorHandler = (color) => {
    dispatch({
      type: color.toLowerCase(),
      payload: -1 * COLOR_INCREMENT,
    });
  };

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
      <View
        style={{
          ...styles.colorBox,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
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
