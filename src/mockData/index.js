import { API_BASE_URL } from '../constants';
import { JestEnvironment } from '@jest/environment';

const payload = {
  staffId: 'SM090',
  password: 'password123R'
};

const fakeUser = {
  staffId: 'SM090',
  password: 'Password1'
};
const loginEndpoint = 'http://localhost:4000/auth/login';
// const signupEndpoint = `${API_BASE_URL}/users/signup`;

const loginOkResponse = {
  status: true,
  msg: 'Login successful. Redirecting...',
  token: 'sample token'
};

const loginBadResponse = {
  status: false,
  msg: 'Invalid login credentials'
};

const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlMb2FkIjp7ImlkIjoiZDE1NjRhYTYtZTgxZC00MWFiLTg0NjktMGFhNTczZjRhNmM1Iiwicm9sZSI6W119LCJpYXQiOjE1NTEzNDg0NjEsImV4cCI6MTU1MTQzNDg2MX0.W-Q3vDCP1b4iKMOm_cBSMTzmRqvU9kpzcP-E2ka2n4U';

const mockObj = {
    "id": "d1564aa6-e81d-41ab-8469-0aa573f4a6c5",
     "role": [],
  }
const loginProps = {
  login: jest.fn(),
  auth: {
    authLoading: true,
    isAuthenticated: true,
  }
}
export {
  payload,
  fakeUser,
  loginEndpoint,
  loginOkResponse,
  loginBadResponse,
  jwtToken,
  mockObj,
  loginProps
};
