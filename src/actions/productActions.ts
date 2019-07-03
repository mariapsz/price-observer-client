import * as types from './index';
import {Product} from '../DataModels/Product';
import {User} from '../DataModels/User';

export const checkProduct = (URL: URL) => {
    return {
        type: types.CHECK_PRODUCT,
        URL,
    }
};

export const addProduct = (product:Product) => {
    return {
        type: types.ADD_PRODUCT,
        product,
    }
};

export const getProductsList = (user:User) => {
    return {
        type: types.GET_PRODUCTS_LIST,
        user,
    }
};


