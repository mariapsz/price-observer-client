import {takeLatest} from 'redux-saga/effects';
import * as types from '../actions';
import {loginSaga} from './authenticationSaga/loginSaga/LoginSaga';

export default function* watchUserAuthentication() {
    yield takeLatest(types.LOGIN_USER, loginSaga);
}