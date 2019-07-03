import {put, call} from 'redux-saga/effects';
import * as types from '../actions'
import {addProductService, checkProductService, getProductsListService} from '../services/productOperationsService';

export function* checkProductSaga(payload) {
    try {
        const response = yield call(checkProductService, payload);
        if (response.status === 'error') {
            throw response.message;
        } else {
            response.success = true;
            yield [
                put({type: types.CHECK_PRODUCT_SUCCESS, response})
            ];
        }
    } catch (error) {
        yield put({type: types.CHECK_PRODUCT_ERROR, response: {message: error}});
    }
}

export function* addProductSaga(payload) {
    try {
        const response = yield call(addProductService, payload);
        console.log('addProductSaga',response);
        if (response.status === 'error') {
            throw response.message;
        } else {
            response.success = true;
            yield [
                put({type: types.ADD_PRODUCT_SUCCESS, response})
            ];
        }
    } catch (error) {
        yield put({type: types.ADD_PRODUCT_ERROR, response: {message: error}});
    }
}

export function* getProductsListSaga(payload) {
    try {
        const response = yield call(getProductsListService, payload);
        console.log('getProductsListService',response);
        if (response.status === 'error') {
            throw response.message;
        } else {
            response.success = true;
            yield [
                put({type: types.GET_PRODUCTS_LIST_SUCCESS, response})
            ];
        }
    } catch (error) {
        yield put({type: types.GET_PRODUCTS_LIST_ERROR, response: {message: error}});
    }
}