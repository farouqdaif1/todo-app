import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import todoReducer from './reducers/todoReducer';


const rootReducer = combineReducers({
    auth: authReducer,
    todo: todoReducer,
  });
const store = configureStore({
    reducer: rootReducer,
});

export default store;