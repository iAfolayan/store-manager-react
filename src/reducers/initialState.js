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
    products: []
  }
};

export default initialState;
