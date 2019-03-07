import jwtDecode from 'jwt-decode';
import { authentication } from '../constants';

const setToken = token => localStorage.setItem(authentication, token);

const getUserIdFromLocalStorage = () => {
  const token = localStorage.getItem(authentication);
  try {
    const { payLoad } = jwtDecode(token);
    return payLoad.id;
  } catch (error) {
    return null;
  }
};

const isUserAuthenticated = () => {
  const token = localStorage.getItem(authentication);
  if (!token) {
    return false;
  }
  try {
    const decodedToken = jwtDecode(token);
    const dateNow = new Date();
    if (decodedToken.exp > dateNow.getTime() / 1000) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

const getToken = localStorage.getItem(authentication);

const config = {
  headers: { Authorization: getToken }
};

export { setToken, getToken, config, getUserIdFromLocalStorage, isUserAuthenticated };
