import { toast } from 'react-toastify';
import { loginCall } from '../../helpers/axiosHelper/auth';
import { setToken } from '../../helpers/jwt';
import actionTypes from './actionTypes';

const { AUTH_LOADING, LOGIN_SUCCESS, LOGIN_FAILURE } = actionTypes;

export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload
});

export const loginFailure = payload => ({
  type: LOGIN_FAILURE,
  payload
});

export const userLogin = user => async (dispatch) => {
  try {
    // dispatch(triggerLoading(AUTH_LOADING));
    const response = await loginCall(user);
    setToken(response.data.loginToken);
    dispatch(loginSuccess(response.data));
    toast.success(response.data.message);
    console.log('-------->', user)
  } catch (error) {
    if (error.response) {
      dispatch(loginFailure(error.response));
      toast.error(error.response.data.message);
    }
  }
};

export const accountActivation = (response, token) => (dispatch) => {
  if (token) {
    setToken(token);
    dispatch(loginSuccess(response));
  } else {
    dispatch(loginFailure(response));
  }
};
