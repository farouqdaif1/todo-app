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
import {
  addTodo,
  fetchTodos,
  deleteTodo,
} from "../../../store/actions/todoActions";
import { useSelector } from "react-redux";

const TodoItem = ({ element,text,token }) => {
  const dispatch = useDispatch();
  // const [id, setId] = useState(null);

  const handleDeleteTodo = (element,token) => {
    dispatch(deleteTodo(element,token));
    console.log(element);
  };

  return (
    <View style={styles.item}>
      <Text style={styles.item_text}>{text}</Text>
      <Button
        style={styles.item_btn}
        title="delete"
        color="#ff0000" // Set the color based on your design
        onPress={() => {
          handleDeleteTodo(element,token);
        }}
      />
    </View>
  );
};

const HomeScreen = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);
  const [title, setTitle] = useState("");
  const [completed, setCompeleted] = useState(false);
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(null);

  const clear = () => {
    setTitle("");
    setCompeleted(false);
  };
  const handelAddTodo = () => {
    const task = { title, completed, userId };
    dispatch(addTodo(task, token));
    clear();
  };
  const loadUserFromStorage = async () => {
    try {
      const storedUserJSON = await AsyncStorage.getItem("profile");
      const storedUser = JSON.parse(storedUserJSON);
      console.log("storedUser", storedUser);
      if (storedUser.foundUser) {
        setUserId(storedUser.foundUser.id);
        setToken(storedUser.token);
      }
        if(storedUser.newUser){
          setUserId(storedUser.newUser.id);
          setToken(storedUser.token);
        }
        } catch (error) {
      console.error("Error loading user from AsyncStorage:", error);
    }
  };

  useEffect(() => {
    loadUserFromStorage();
  }, []);
  useEffect(() => {
    if (userId && token) {
      dispatch(fetchTodos(userId, token));
    }
  }, [userId]);
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
        renderItem={({ item }) => <TodoItem token={token} element={item.id} text={item.title} />}
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
