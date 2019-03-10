import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productsReducer from './productsReducer';
import userReducer from './userReducer';


const rootReducer = combineReducers({
  authReducer, productsReducer, userReducer
});

export default rootReducer;
