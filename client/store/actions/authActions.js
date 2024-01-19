import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData) => async (dispatch) => {
  console.log(formData)
  try {
    const { data } = await api.signIn(formData);
    console.log(data);
    dispatch({ type: AUTH, data });

  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });

  } catch (error) {
    console.log(error);
  }
};