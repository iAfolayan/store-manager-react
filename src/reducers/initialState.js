const initialState = {
  auth: {
    authIsLoading: false,
    success: false,
    response: '',
    isAuthenticated: null
  },
  product: {
    productsIsLoading: false,
    success: false,
    successResponse: {},
    failureResponse: {},
    products: [],
    cart: []
  },
  user: {
    userIsLoading: false,
    success: false,
    failureResponse: {},
    successResponse: {}
  }
};

export default initialState;
