import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from "react-native";

const TodoItem = ({ text }) => {
  const deleteTodo = () => {};
  return (
    <View style={styles.item}>
      <Text style={styles.item_text}>{text}</Text>
      <Button
        style={styles.item_btn}
        title="delete"
        onPress={deleteTodo}
        color="#ff0000" // Set the color based on your design
      />
    </View>
  );
};

const HomeScreen = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (text.trim() !== "") {
      setTodos([...todos, { id: Date.now().toString(), text }]);
      setText("");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new todo"
          value={text}
          onChangeText={(value) => setText(value)}
        />
        <Button title="Add" onPress={addTodo} />
      </View>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TodoItem text={item.text} />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  item: {
    flexDirection: "row",
    width: "100%",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  item_text: {
    width: "80%",
  },
  item_btn: {
    flex: 1,
    width: "20%",
  },
});

export default HomeScreen;
