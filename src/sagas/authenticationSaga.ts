import {put, call} from 'redux-saga/effects';
import {registerUserService, loginUserService} from '../services/authenticationService';

import * as types from '../actions'

export function* registerSaga(payload: any) {
    try {
        const response = yield call(registerUserService, payload);
        if (response.status === 'error') {
            throw  response.message;
        } else {
            response.success = true;
            yield [
                put({type: types.REGISTER_USER_SUCCESS, response})
            ];
        }
    } catch (error) {
        yield put({type: types.REGISTER_USER_ERROR, response: {message: error}});
    }
}

export function* loginSaga(payload: any) {
    try {
        const response = yield call(loginUserService, payload);
        if (response.status === 'error') {
            throw response.message;
        } else {
            response.success = true;
            response.token = response.data.token;
            let yieldResponse = yield put({type: types.LOGIN_USER_SUCCESS, response});

            console.log('yieldResponse', yieldResponse);
        }
    } catch (error) {
        yield put({type: types.LOGIN_USER_ERROR, response: {message: error}});
    }
}