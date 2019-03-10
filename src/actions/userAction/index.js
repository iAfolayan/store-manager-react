import { createAUser } from '../../helpers/axiosHelper/user';
import { toast } from 'react-toastify';
import actionTypes from './actionTypes';
import triggerLoading from '../loading';


const { 
  CREATING_USER,
  CREATE_USER_RESPONSE
  } = actionTypes;

export const createUserResponse = payload => ({
  type: CREATE_USER_RESPONSE,
  payload
});


export const createUser = userDetails => async (dispatch) => {
  try {
    dispatch(triggerLoading(CREATING_USER));
    const response = await createAUser(userDetails);
    toast.success(response.data.msg);
    dispatch(createUserResponse(true));
  } catch (error) {
    if (error.response) {
      dispatch(createUserResponse(false));
      toast.error(error.response.data.msg);
    }
  }
};
