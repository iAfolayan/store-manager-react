import actionTypes from '../actions/productsActions/actionTypes';
import initialState from './initialState';

const { PRODUCTS_LOADING, PRODUCTS_SUCCESS, PRODUCTS_FAILURE, CREATING_PRODUCT, CREATE_PRODUCT_RESPONSE } = actionTypes;

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
    case CREATING_PRODUCT: 
      return {
        ...state,
        creatingProduct: true
      }
    case CREATE_PRODUCT_RESPONSE:
      return {
        ...state,
        creatingProduct: false,
        createStatus: action.payload,
      }
    default:
      return state;
  }
};
