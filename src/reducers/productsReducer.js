import actionTypes from '../actions/productsActions/actionTypes';
import initialState from './initialState';

const { PRODUCTS_LOADING, PRODUCTS_SUCCESS, PRODUCTS_FAILURE, CREATING_PRODUCT, CREATE_PRODUCT_RESPONSE, ADD_TO_CART, REMOVE_FROM_CART } = actionTypes;

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
    case ADD_TO_CART: {
      const productId = action.payload;
      const { products, cart } = state;
      const theProduct = products.filter(each => each.id === productId)[0];
      const cartIndex = cart.findIndex(each => each.id === productId);
      if (cartIndex >= 0) {
        cart[cartIndex] = {
          image: theProduct.image,
          price: theProduct.price * (cart[cartIndex].quantity + 1),
          name: theProduct.productname,
          quantity: cart[cartIndex].quantity + 1,
          id: theProduct.id
        }
      } else {
        cart.push({
          image: theProduct.image,
          price: theProduct.price,
          name: theProduct.productname,
          quantity: 1,
          id: theProduct.id
        });
      }
      return {
        ...state,
        cart
      }
    }
    case REMOVE_FROM_CART: {
      const { cart } = state;
      cart.splice(action.payload, 1);
      return {
        ...state,
        cart
      } 
    }
    default:
      return state;
  }
};
