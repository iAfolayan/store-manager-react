import { getProducts } from '../../helpers/axiosHelper/products';
import actionTypes from './actionTypes';
import triggerLoading from '../loading';


const { PRODUCTS_LOADING, PRODUCTS_SUCCESS, PRODUCTS_FAILURE } = actionTypes;

export const productsSuccess = payload => ({
  type: PRODUCTS_SUCCESS,
  payload
});

export const productsFailure = payload => ({
  type: PRODUCTS_FAILURE,
  payload
});

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(triggerLoading(PRODUCTS_LOADING));
    const response = await getProducts();
    dispatch(productsSuccess(response.data.data));
  } catch (error) {
    if (error.response) {
      dispatch(productsFailure(error.response));
    }
  }
};
