import axios from 'axios';
import { API_BASE_URL, CLOUDINARY_UPLOAD_PRESET, CLOUDINARY_UPLOAD_URL } from '../../constants';
import { config } from '../jwt';

export const getProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}/products`, config());
  return response;
};

export const createTheProduct = (productDetails) => {
  return axios.post(`${API_BASE_URL}/products`, productDetails, config());
}

export const imageUpload = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
  try {
    const response = await axios({
      url: CLOUDINARY_UPLOAD_URL,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: formData
    });
    return response;
  } catch (error) {
    return error.message;
  }
};