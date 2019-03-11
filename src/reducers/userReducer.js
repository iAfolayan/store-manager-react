import actionTypes from '../actions/userAction/actionTypes';
import initialState from './initialState';

const { CREATING_USER, CREATE_USER_RESPONSE } = actionTypes;

const { user } = initialState;

export default (state = user, action) => {
  switch (action.type) {
    case CREATING_USER: 
      return {
        ...state,
        creatingUser: true
      }
    case CREATE_USER_RESPONSE:
      return {
        ...state,
        creatingUser: false,
        createStatus: action.payload,
      }
    default:
      return state;
  }
};
