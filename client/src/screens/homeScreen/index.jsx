import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../store/actions/todoActions";

const TodoItem = ({ text }) => {
  const handleDeleteTodo = () => {};
  return (
    <View style={styles.item}>
      <Text style={styles.item_text}>{text}</Text>
      <Button
        style={styles.item_btn}
        title="delete"
        onPress={handleDeleteTodo}
        color="#ff0000" // Set the color based on your design
      />
    </View>
  );
};

const HomeScreen = () => {
  const [text, setText] = useState("");
  const [completed, setCompeleted] = useState(false);
  const [userId, setUserId] = useState(null);
  const [todos, setTodos] = useState([]);
  const dispatch = useDispatch();
  const handelAddTodo = () => {
    const task = { text, completed, userId };
    dispatch(addTodo(task));
  };
  const loadUserFromStorage = async () => {
    try {
      const storedUserJSON = await AsyncStorage.getItem("profile");
      const storedUser = JSON.parse(storedUserJSON);
      setUserId(storedUser.foundUser.id);
    } catch (error) {
      console.error("Error loading user from AsyncStorage:", error);
    }
  };
  useEffect(() => {
    loadUserFromStorage();
  }, []);
  const handelFetchTodo = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new todo"
          value={text}
          onChangeText={(value) => setText(value)}
        />
        <Button title="Add" onPress={handelAddTodo} />
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
