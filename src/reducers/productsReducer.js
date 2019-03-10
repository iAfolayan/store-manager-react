import actionTypes from '../actions/productsActions/actionTypes';
import initialState from './initialState';

const { PRODUCTS_LOADING, PRODUCTS_SUCCESS, PRODUCTS_FAILURE } = actionTypes;

const { product } = initialState;

export default (state = product, action) => {
  switch (action.type) {
    case PRODUCTS_LOADING:
      return {
        ...state,
        authIsLoading: true
      };
    case PRODUCTS_SUCCESS:
      return {
        ...state,
        productsIsLoading: false,
        success: true,
        products: action.payload,
        failureResponse: {}
      };
    case PRODUCTS_FAILURE:
      return {
        ...state,
        productsIsLoading: false,
        success: false,
        successResponse: {},
        failureResponse: action.payLoad
      };
    default:
      return state;
  }
};
