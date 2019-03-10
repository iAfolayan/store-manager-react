import jwtDecode from 'jwt-decode';
import { authentication } from '../constants';

const setToken = token => localStorage.setItem(authentication, token);

const getUserDetailsFromLocalStorage = () => {
  const token = localStorage.getItem(authentication);
  try {
    const { payLoad } = jwtDecode(token);
    return payLoad;
  } catch (error) {
    return null;
  }
};

const getToken = localStorage.getItem(authentication);

const config = {
  headers: { Authorization: getToken }
};

export { setToken, getToken, config, getUserDetailsFromLocalStorage };
