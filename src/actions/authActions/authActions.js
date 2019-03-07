import { toast } from 'react-toastify';
import { signupCall, loginCall } from '../../helpers/axiosCalls/auth';
import { setToken } from '../../helpers/jwt';
import actionTypes from './actionTypes';
import triggerLoading from './loading';
import networkError from '../networkError/networkErrorAction';
import { networkErrorResponse } from '../../constants';

const { AUTH_LOADING, SIGNUP_SUCCESS, SIGNUP_FAILURE, LOGIN_SUCCESS, LOGIN_FAILURE } = actionTypes;

export const signUpSuccess = payload => ({
  type: SIGNUP_SUCCESS,
  payload
});

export const signUpFailure = payload => ({
  type: SIGNUP_FAILURE,
  payload
});

export const userSignUp = user => async (dispatch) => {
  try {
    dispatch(triggerLoading(AUTH_LOADING));
    const response = await signupCall(user);
    dispatch(signUpSuccess(response));
  } catch (error) {
    if (error.response) {
      dispatch(signUpFailure(error.response));
      toast.error(error.response.data.message);
    } else {
      dispatch(networkError(networkErrorResponse));
      toast.warn(networkErrorResponse);
    }
  }
};

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
    dispatch(triggerLoading(AUTH_LOADING));
    const response = await loginCall(user);
    setToken(response.data.loginToken);
    dispatch(loginSuccess(response));
    toast.success(response.data.message);
  } catch (error) {
    if (error.response) {
      dispatch(loginFailure(error.response));
      toast.error(error.response.data.message);
    } else {
      dispatch(networkError(networkErrorResponse));
      toast.warn(networkErrorResponse);
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
