import axios from 'axios';
import { API_BASE_URL } from '../../constants';

const signupCall = async (user) => {
  const response = await axios.post('https://store-maneger.herokuapp.com/api/v1/auth/signup', user);
  return response;
};

const loginCall = async (user) => {
  const response = await axios.post(`${API_BASE_URL}/auth/signin`, user);
  return response;
};

export { signupCall, loginCall };
