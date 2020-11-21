import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title="Increase" onPress={increase} />
      </View>
      <View style={styles.button}>
        <Button title="Decrease" onPress={decrease} />
      </View>
      <Text style={styles.text}>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    marginVertical: 10,
    width: "80%",
  },
  text: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default CounterScreen;
