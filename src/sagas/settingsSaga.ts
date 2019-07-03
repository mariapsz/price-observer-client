import {put, call} from 'redux-saga/effects';
import {changePasswordService} from '../services/settingsService';

import * as types from '../actions'

export function* changePasswordSaga(payload) {
    try {
        const response = yield call(changePasswordService, payload);
        if (response.status === 'error') {
            throw  response.message;
        } else {
            response.success = true;
            yield [
                put({type: types.CHANGE_PASSWORD_SUCCESS, response})
            ];
        }
    } catch (error) {
        yield put({type: types.CHANGE_PASSWORD_ERROR, response: {message: error}});
    }
}

