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
import { addTodo, fetchTodos,deleteTodo } from "../../../store/actions/todoActions";
import { useSelector } from "react-redux";

const TodoItem = ({ elementId, text }) => {
  const dispatch = useDispatch();

  // const handleDeleteTodo = (elementId) => {
  //   dispatch(deleteTodo(elementId));
  // };
  return (
    <View style={styles.item}>
      <Text style={styles.item_text}>{text}</Text>
      <Button
        style={styles.item_btn}
        title="delete"
        color="#ff0000" // Set the color based on your design
        // onPress={handleDeleteTodo(elementId)}
      />
    </View>
  );
};

const HomeScreen = () => {
  const [title, setTitle] = useState("");
  const [completed, setCompeleted] = useState(false);
  const [userId, setUserId] = useState(null);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);
  const clear = () => { 
    setTitle("");
    setCompeleted(false);
  };
  const handelAddTodo = () => {
    const task = { title, completed, userId };
    dispatch(addTodo(task));
    clear()
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
    dispatch(fetchTodos());
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new todo"
          value={title}
          onChangeText={(value) => setTitle(value)}
        />
        <Button title="Add" onPress={handelAddTodo} />
      </View>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TodoItem  elementId={item.id}  text={item.title} />}
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
