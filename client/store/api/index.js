import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:3000/api' });
export const fetchTodo = () => API.get('/todlist');
export const createTodo = (newTodo) => API.post('/todolist/create-todo', newTodo);
export const deleteTodo = (id) => API.delete(`/todolist/${id}`);
export const signIn = (formData) => API.post('/users/login', formData);
export const signUp = (formData) => API.post('/users/signup', formData);