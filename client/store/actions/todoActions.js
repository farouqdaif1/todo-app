import { CREATE_TODO, DELETE_TODO, UPDATE_TODO, FETCH_ALL_TODO } from '../constants/actionTypes';
import * as api from '../api/index.js';


export const addTodo = (task, token) => async (dispatch) => {
    try {

        const { data } = await api.createTodo(task, token);
        
        const { todo } = data;
        dispatch({ type: CREATE_TODO, payload: todo });

    } catch (error) {
        console.log(error);
    }
};

export const deleteTodo = (id) => async (dispatch) => {
    try {
        await api.deleteTodo(id);
        dispatch({ type: DELETE_TODO, payload: id });

    } catch (error) {
        console.log(error);
    }
};
export const fetchTodos = (userId , token) => async (dispatch) => {
    try {
        const { data } = await api.fetchTodo(userId, token);
        const { todos } = data;
        dispatch({ type: FETCH_ALL_TODO, payload: todos });
    } catch (error) {

        console.log(error);
    }
}