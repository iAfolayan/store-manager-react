import { getProducts, createTheProduct } from '../../helpers/axiosHelper/products';
import { toast } from 'react-toastify';
import actionTypes from './actionTypes';
import triggerLoading from '../loading';


const { 
  PRODUCTS_LOADING,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAILURE ,
  CREATE_PRODUCT_RESPONSE,
  CREATING_PRODUCT,
  } = actionTypes;

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

export const createProductResponse = payload => ({
  type: CREATE_PRODUCT_RESPONSE,
  payload
});


export const createProduct = (productDetails) => async (dispatch) => {
  try {
    dispatch(triggerLoading(CREATING_PRODUCT));
    const response = await createTheProduct(productDetails);
    toast.success(response.data.msg);
    dispatch(createProductResponse(true));
  } catch (error) {
    console.log(error);
    if (error.response) {
      dispatch(createProductResponse(false));
      toast.error(error.response.data.msg);
    }
  }
};
