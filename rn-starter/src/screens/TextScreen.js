import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");

  const response =
    password.length < 4 ? <Text>Password must be 4 characters</Text> : null;
  return (
    <View>
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.textInput}
      />
      {response}
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
