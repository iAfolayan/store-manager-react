import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import * as actions from '../index';
import actionTypes from '../actionTypes';
import * as axios from '../../../helpers/axiosHelper/products';
import { payload} from '../../../mockData';

const mockStore = configureStore([thunk]);
const store = mockStore({ createArticle: {} });
const dispatch = jest.fn();

describe('Products Action Test', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    store.clearActions();
    dispatch.mockRestore();
    moxios.uninstall();
  });
  afterAll(dispatch.mockRestore);

  it(`should return an action object once ${actionTypes.PRODUCTS_SUCCESS} is fired`, () => {
    expect(actions.productsSuccess(payload)).toEqual({
      type: actionTypes.PRODUCTS_SUCCESS,
      payload
    })
  });

  it(`should return an actio n object once ${actionTypes.PRODUCTS_FAILURE} is fired`, () => {
    expect(actions.productsFailure(payload)).toEqual({
      type: actionTypes.PRODUCTS_FAILURE,
      payload
    })
  });

  it(`should return an actio n object once ${actionTypes.ADD_TO_CART} is fired`, () => {
    expect(actions.addToCart(payload)).toEqual({
      type: actionTypes.ADD_TO_CART,
      payload
    })
  });

  it(`should return an actio n object once ${actionTypes.REMOVE_FROM_CART} is fired`, () => {
    expect(actions.removeProductFromCart(payload)).toEqual({
      type: actionTypes.REMOVE_FROM_CART,
      payload
    })
  });

  it(`should return an actio n object once ${actionTypes.REMOVE_FROM_CART} is fired`, () => {
    expect(actions.removeProductFromCart(payload)).toEqual({
      type: actionTypes.REMOVE_FROM_CART,
      payload
    })
  });
});
