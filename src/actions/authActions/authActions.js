import { toast } from 'react-toastify';
import { loginCall } from '../../helpers/axiosHelper/auth';
import jwtDecode from 'jwt-decode';
import { setToken } from '../../helpers/jwt';
import actionTypes from './actionTypes';


const { LOGIN_SUCCESS, LOGIN_FAILURE } = actionTypes;

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
    const response = await loginCall(user);
    setToken(response.data.data);
    const payLoad = jwtDecode(response.data.data);
    dispatch(loginSuccess(payLoad));
    toast.success(response.data.msg);
  } catch (error) {
    if (error.response) {
      dispatch(loginFailure(error.response));
      toast.error(error.response.data.msg);
    }
  }
};
