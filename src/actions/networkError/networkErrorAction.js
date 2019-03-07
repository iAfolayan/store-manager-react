import NETWORK_ERROR from './actionType';

const networkError = payload => ({
  type: NETWORK_ERROR,
  payload
});

export default networkError;
