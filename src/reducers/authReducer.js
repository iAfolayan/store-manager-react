import actionTypes from '../actions/authActions/actionTypes';
import initialState from './initialState';
import NETWORK_ERROR from '../actions/networkError/actionType';

const {
  AUTH_LOADING,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  IS_AUTHENTICATED
} = actionTypes;

const { auth } = initialState;

export default (state = auth, action) => {
  switch (action.type) {
    case AUTH_LOADING:
      return {
        ...state,
        authIsLoading: true
      };
    case SIGNUP_SUCCESS:
      return {
        authIsLoading: false,
        success: true,
        response: action.payload.data.msg,
        isAuthenticated: false
      };
    case SIGNUP_FAILURE:
      return {
        authIsLoading: false,
        success: false,
        response: action.payload.data.msg,
        isAuthenticated: false
      };
    case LOGIN_SUCCESS:
      return {
        authIsLoading: false,
        success: true,
        response: action.payload,
        isAuthenticated: true
      };
    case LOGIN_FAILURE:
      return {
        authIsLoading: false,
        success: false,
        response: action.payload.data.msg,
        isAuthenticated: false
      };
    case NETWORK_ERROR:
      return {
        authIsLoading: false,
        success: false,
        response: action.payload,
        isAuthenticated: false
      };
    case IS_AUTHENTICATED:
      return {
        isAuthenticated: true
      };
    default:
      return state;
  }
};
