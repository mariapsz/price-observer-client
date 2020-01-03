import {combineReducers} from 'redux';
import login from './loginReducer';
import products from './productsReducer';
import xssProtected from './xssProtectedReducer';

const rootReducer = combineReducers({
    login, products, xssProtected,
});

export default rootReducer;