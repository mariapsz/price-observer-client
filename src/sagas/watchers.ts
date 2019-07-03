import {takeLatest} from 'redux-saga/effects';
import {registerSaga, loginSaga} from './authenticationSaga';
import * as types from '../actions';
import {addProductSaga, checkProductSaga, getProductsListSaga} from './productOperationsSaga';
import {changePasswordSaga} from './settingsSaga';

export default function* watchUserAuthentication() {
    yield takeLatest(types.REGISTER_USER, registerSaga);
    yield takeLatest(types.LOGIN_USER, loginSaga);
    yield takeLatest(types.CHECK_PRODUCT, checkProductSaga);
    yield takeLatest(types.ADD_PRODUCT, addProductSaga);
    yield takeLatest(types.GET_PRODUCTS_LIST, getProductsListSaga);
    yield takeLatest(types.CHANGE_PASSWORD, changePasswordSaga);
}