import 'jest-localstorage-mock';
import { setToken, getUserDetailsFromLocalStorage } from './jwt';
import { jwtToken, mockObj } from '../mockData';

describe('save token to local storage', () => {
  afterEach(() => {
    localStorage.clear();
  });
  test('should set token to the local storage when the setToken function is called', () => {
    setToken('sampleToken');
    expect(localStorage.__STORE__.authentication).toBe('sampleToken');
    expect(Object.keys(localStorage.__STORE__).length).toBe(1);
  });
});

describe('getUserDetailsFromLocalStorage', () => {
  afterEach(() => {
    localStorage.clear();
  });
  test('should not get a userId', () => {
    expect(getUserDetailsFromLocalStorage()).toBe(null);
  });
});
