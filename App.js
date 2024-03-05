import React, { useState } from "react";
// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  TextInput,
  Button,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";

export default function App() {
  console.log("App Started");

  const [todo, setTodo] = useState([
    { title: "create an app", key: "1" },
    { title: "buy a coffee", key: "2" },
    { title: "practice react native", key: "3" },
  ]);

  // delete function
  const pressHandler = (key) => {
    setTodo((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitData = (text) => {
    if (text.length > 3) {
      setTodo((prevTodos) => {
        return [
          {
            title: text,
            key: Math.random().toString(),
          },
          ...prevTodos,
        ];
      });
    } else {
      Alert.alert("Oops!", "The characters length must be greater than 3.", [
        { text: "Okay", onPress: () => console.log("Alert is closed") },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        {/* header */}
        <Header />
        <View style={styles.content}>
          {/* to form */}
          <AddTodo submitData={submitData} />
          <View style={styles.list}>
            <FlatList
              data={todo}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
  },
  content: {
    flex: 1,
    padding: 50,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
