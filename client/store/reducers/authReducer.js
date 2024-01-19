import AsyncStorage from '@react-native-async-storage/async-storage';
import * as actionType from '../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      AsyncStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data };
    case actionType.LOGOUT:
      AsyncStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default authReducer;