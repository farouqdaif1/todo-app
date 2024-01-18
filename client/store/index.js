import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';

const rootReducer = {
    auth: authReducer,
    // Add other reducers as needed
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;