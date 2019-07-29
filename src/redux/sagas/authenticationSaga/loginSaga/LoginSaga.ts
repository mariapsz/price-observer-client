import {LoginSagaPayload} from './LoginSagaPayload';
import {call, put} from 'redux-saga/effects';
import {loginUserService} from '../../../../services/authenticationService';
import * as types from '../../../actions';

export function* loginSaga(payload: LoginSagaPayload) {
    try {
        const response = yield call(loginUserService, payload.requestBody);
        console.log('response: ', response);
        if (response.statusCode === 200) {
            yield put({type: types.LOGIN_USER_SUCCESS, token: response.body.token});
        } else {
            throw new Error(response.body.message === 'BAD_EMAIL_OR_PASSWORD' ? 'Niepoprawny e-mail lub hasło' : 'Wystąpił błąd, prosimy spróbować później');
        }
    } catch (error) {
        yield put({type: types.LOGIN_USER_ERROR, errorMessage: error.message});
    }
}