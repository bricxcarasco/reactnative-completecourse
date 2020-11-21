import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const ColorCounter = ({ color, moreColor, lessColor }) => {
  const moreColorHandler = () => {
    moreColor(color);
  };

  const lessColorHandler = () => {
    lessColor(color);
  };

  return (
    <View style={styles.container}>
      <Text>{color}</Text>
      <View style={styles.buttonView}>
        <Button title={`More ${color}`} onPress={moreColorHandler} />
      </View>
      <View style={styles.buttonView}>
        <Button title={`Less ${color}`} onPress={lessColorHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  buttonView: {
    marginVertical: 4,
    width: "80%",
  },
});

export default ColorCounter;
