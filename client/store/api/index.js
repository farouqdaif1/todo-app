import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";

const API = axios.create({ baseURL: 'http://localhost:3000/api' });
const storedUserJSON = await AsyncStorage.getItem("profile");
const storedUser = JSON.parse(storedUserJSON);
const token = storedUser?.token;

const axiosConfig = {
  headers: {
    'Authorization': `${token}`,
    'Content-Type': 'application/json', // Adjust content type as needed
  },
};
export const fetchTodo = (id, token) => {
  const axiosConfig = {
    headers: {
      'Authorization': `${token}`,
      'TYPE': "GET/ALL/TODOS",
    },
  };
  const data = API.get(`/todolist/all/${id}`, axiosConfig)
  return data;
};
export const createTodo = (newTodo, token) => {
  const axiosConfig = {
    headers: {
      'Authorization': `${token}`,
      'TYPE': "Add/TODOS",
    },
  };
  const data =API.post(`/todolist/create-todo`, newTodo, axiosConfig)
  return data;
};
export const deleteTodo = (id, token) => {
  const axiosConfig = {
    headers: {
      'Authorization': `${token}`,
      'TYPE': "DElETE/TODOS",
    },
  };
  const data = API.delete(`/todolist/${id}`, axiosConfig)
  return data;
};
export const signIn = (formData) => API.post('/users/login', formData);
export const signUp = (formData) => API.post('/users/signup', formData);
