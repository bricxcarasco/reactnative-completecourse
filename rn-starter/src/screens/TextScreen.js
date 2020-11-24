import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");

  return (
    <View>
      <TextInput
        value={name}
        onChangeText={(text) => setName(text)}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.textInput}
      />
      <Text>Hi my name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    margin: 15,
    borderColor: "#000",
    borderWidth: 1,
  },
});

export default TextScreen;
