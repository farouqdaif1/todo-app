import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:5000/api' });
export const fetchTodo = () => API.get('/todlist');
export const createTodo = (newTodo) => API.post('/todlist', newTodo);
export const deleteTodo = (id) => API.delete(`/todlist/${id}`);
export const signIn = (formData) => API.post('/users/login', formData);
export const signUp = (formData) => API.post('/users/signup', formData);