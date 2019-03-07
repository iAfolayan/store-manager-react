import axios from 'axios';
import { API_BASE_URL } from '../../constants';

export const loginCall = async (user) => {
  const response = await axios.post(`${API_BASE_URL}/auth/login/`, user);
  return response;
};

export default loginCall;
