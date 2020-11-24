import React, { useReducer } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import CounterReducer from "../reducers/counterReducer";

const INITIAL_STATE = {
  count: 0,
};

const CounterScreen = () => {
  const [{ count } = state, dispatch] = useReducer(
    CounterReducer,
    INITIAL_STATE
  );

  const increase = () => {
    dispatch({
      type: "increase_counter",
      payload: 1,
    });
  };

  const decrease = () => {
    dispatch({
      type: "decrease_counter",
      payload: 1,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title="Increase" onPress={increase} />
      </View>
      <View style={styles.button}>
        <Button title="Decrease" onPress={decrease} />
      </View>
      <Text style={styles.text}>Current Count:</Text>
      <Text style={styles.text}>{count}</Text>
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
