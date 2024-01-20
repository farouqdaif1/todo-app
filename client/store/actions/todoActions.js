import { CREATE_TODO, DELETE_TODO, UPDATE_TODO, FETCH_ALL_TODO } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const addTodo = (task) => async (dispatch) => {
    try {
        console.log(task);

        const { data } = await api.createTodo(task);
        dispatch({ type: CREATE_TODO, data });

    } catch (error) {
        console.log(error);
    }
};

export const deleteTodo = (task) => async (dispatch) => {
    try {
        const { data } = await api.deleteTodo(deleteTodo);
        dispatch({ type: DELETE_TODO, data });

    } catch (error) {
        console.log(error);
    }
};
export const fetchTodos = () => async (dispatch) => {
    try {
        const { data } = await api.fetchTodo();
        dispatch({ type: FETCH_ALL_TODO, data });

    } catch (error) {
        console.log(error);
    }
}