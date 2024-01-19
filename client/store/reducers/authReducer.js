import AsyncStorage from '@react-native-async-storage/async-storage';
import * as actionType from '../constants/actionTypes';
const authReducer = (state = { authData }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      AsyncStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, loading: false, errors: null };
    case actionType.LOGOUT:
      AsyncStorage.clear();
      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};

export default authReducer;