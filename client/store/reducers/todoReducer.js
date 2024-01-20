import * as actionType from '../constants/actionTypes';

// reducer for todo list
const initialState = {
    todos: [],
    loading: false,
    error: null
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.CREATE_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case actionType.FETCH_ALL_TODO:
            return {
                ...state,
                todos: action.payload
            };
        case actionType.UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => todo._id === action.payload._id ? action.payload : todo)
            };
        case actionType.DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo._id !== action.payload)
            };
        default:
            return state;
    }
}
export default todoReducer;