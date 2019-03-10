import trigerLoading from './loading';
import actionTypes from './authActions/actionTypes';

describe('loading action', () => {
  it('should return an action object once the trigger loading action creator is called', () => {
    expect(trigerLoading(actionTypes.AUTH_LOADING)).toEqual({
      type: actionTypes.AUTH_LOADING,
    });
  });
});
