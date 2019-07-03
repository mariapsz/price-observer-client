import {combineReducers} from 'redux';
import register from './registerReducer';
import login from './loginReducer';
import addProduct from './addProductReducer';
import checkProduct from './checkProductReducer';
import productsList from './getProductsListReducer';
import changePassword from './changePasswordReducer';

const rootReducer = combineReducers({
  register, login, addProduct, checkProduct, productsList, changePassword,
});

export default rootReducer;