import jwtDecode from 'jwt-decode';
import { authentication } from '../constants';

export const setToken = token => localStorage.setItem(authentication, token);

export const getUserDetailsFromLocalStorage = () => {
  const token = localStorage.getItem(authentication);
  try {
    const { payLoad } = jwtDecode(token);
    return payLoad;
  } catch (error) {
    return null;
  }
};

export const config = () => ({
  headers: { Authorization: localStorage.getItem(authentication) }
});
