import axios from 'axios';
import { API_BASE_URL } from '../../constants';
import { config } from '../jwt';

export const getProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}/products`, config());
  return response;
};

export const createTheProduct = (productDetails) => {
  return axios.post(`${API_BASE_URL}/products`, productDetails, config());
}
