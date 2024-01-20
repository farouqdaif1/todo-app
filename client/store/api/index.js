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
console.log(token);

export const fetchTodo = (userId) => API.get('/todolist/all', userId, axiosConfig);
export const createTodo = (newTodo) => API.post('/todolist/create-todo', newTodo, axiosConfig);
export const deleteTodo = (id) => API.delete(`/todolist/${id}`, axiosConfig);
export const signIn = (formData) => API.post('/users/login', formData);
export const signUp = (formData) => API.post('/users/signup', formData);