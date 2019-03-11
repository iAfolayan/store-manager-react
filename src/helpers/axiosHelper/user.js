import axios from 'axios';
import { API_BASE_URL } from '../../constants';
import { config } from '../jwt';

export const createAUser = user => {
  return axios.post(`${API_BASE_URL}/auth/signup`, user, config());
}
