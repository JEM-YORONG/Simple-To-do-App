import React, { useState } from "react";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";

export default function AddTodo({ submitData }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter New Todo Here."
        onChangeText={changeHandler}
      />
      <Button title="Add" color={"maroon"} onPress={() => submitData(text)} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    textAlign: "center",
    padding: 5,
    borderWidth: 1,
    marginBottom: 5,
    borderRadius: 10,
  },
});
