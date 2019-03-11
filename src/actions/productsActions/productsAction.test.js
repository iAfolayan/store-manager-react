/* eslint-disable no-throw-literal */
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import * as actions from './index';
import actionTypes from './actionTypes';
import * as axios from '../../helpers/axiosHelper/products';
import {
  payload,
  loginOkResponse,
  mockResponse,
  fakeUser,
  autoLoginResponse,

} from '../../mockData';

const mockStore = configureStore([thunk]);
const store = mockStore({ auth: {} });
const dispatch = jest.fn();

describe('product actions test', () => {
  beforeEach(() => {
    store.clearActions();
    moxios.install();
  });
  afterEach(() => {
    dispatch.mockRestore();
    moxios.uninstall();
  });

  it(`should return an action object once ${actionTypes.PRODUCTS_SUCCESS} is fired`, () => {
    expect(actions.productsSuccess(payload)).toEqual({
      type: actionTypes.PRODUCTS_SUCCESS,
      payload,
    });
  });

  it(`should return an action object once ${actionTypes.PRODUCTS_FAILURE} is fired`, () => {
    expect(actions.productsFailure(payload)).toEqual({
      type: actionTypes.PRODUCTS_FAILURE,
      payload,
    });
  });

  it(`should return an action object once ${actionTypes.ADD_TO_CART} is fired`, () => {
    expect(actions.addToCart(payload)).toEqual({
      type: actionTypes.ADD_TO_CART,
      payload,
    });
  });

  it(`should return an action object once ${actionTypes.REMOVE_FROM_CART} is fired`, () => {
    expect(actions.removeProductFromCart(payload)).toEqual({
      type: actionTypes.REMOVE_FROM_CART,
      payload,
    });
  });

  it(`should return an action object once ${actionTypes.CREATE_PRODUCT_RESPONSE} is fired`, () => {
    expect(actions.createProductResponse(payload)).toEqual({
      type: actionTypes.CREATE_PRODUCT_RESPONSE,
      payload,
    });
  });


  it('should call the fetch products dispatch function', () => {
    axios.getProducts = jest.fn().mockResolvedValue(mockResponse);
    actions.fetchProducts()(dispatch);
    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({ type: actionTypes.PRODUCTS_LOADING});
  });

  it('should call the fetch products dispatch function', () => {
    axios.createTheProduct = jest.fn().mockResolvedValue(mockResponse);

    actions.createProduct()(dispatch);
    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({ type: actionTypes.CREATING_PRODUCT});
  });

  it('should throw error', async () => {
    axios.getProducts = jest.fn(() => {
      throw { response: mockResponse };
    });
    try {
      await actions.fetchProducts()(dispatch);
    } catch (error) {
      expect(dispatch).toBeCalledTimes(1);
      expect(dispatch).toBeCalledWith({
        type: actionTypes.PRODUCTS_FAILURE,
        payload: mockResponse,
      });
    }
    store.clearActions();
  });


});
