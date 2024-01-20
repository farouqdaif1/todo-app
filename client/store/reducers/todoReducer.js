import * as actionType from '../constants/actionTypes';

// reducer for todo list
const todoReducer = (todos = [], action) => {
    switch (action.type) {
        case actionType.CREATE_TODO:
            return [...todos, action.payload];
        case actionType.FETCH_ALL_TODO:
            return action.payload;
        case actionType.UPDATE_TODO:
            return todos.map((todo) => (todo._id === action.payload._id ? action.payload : todo));
        case actionType.DELETE_TODO:
            return todos.filter((todo) => todo._id !== action.payload);
        default:
            return todos;
    }
}
export default todoReducer;