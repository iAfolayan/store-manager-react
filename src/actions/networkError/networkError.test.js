import NETWORK_ERROR from './actionType';
import networkError from './networkErrorAction';
import { payload } from '../../mockData';

describe('Network error', () => {
  it('should return an action object once the network error action is called', () => {
    expect(networkError(payload)).toEqual({
      type: NETWORK_ERROR,
      payload
    });
  });
});
