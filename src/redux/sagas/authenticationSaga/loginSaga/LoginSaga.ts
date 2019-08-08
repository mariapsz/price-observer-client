import {LoginSagaPayload} from './LoginSagaPayload';
import {call, put} from 'redux-saga/effects';
import {loginUserService} from '../../../../services/authenticationService';
import * as types from '../../../actions';

export function* loginSaga(payload: LoginSagaPayload) {
    try {
        const response = yield call(loginUserService, payload.requestBody);
        if(!response)
            throw Error('Wystąpił błąd, nie można się połączyć z serwerem');
        if (response.statusCode === 200) {
            yield put({type: types.LOGIN_USER_SUCCESS, token: response.body.token});
        } else {
            let errorMessage;
            switch (response.body.message) {
                case 'USER_DOES_NOT_EXIST':
                    errorMessage = 'Użytkownik o podanym adresie email nie istnieje';
                    break;
                case 'BAD_EMAIL_OR_PASSWORD':
                    errorMessage = 'Niepoprawny e-mail lub hasło';
                    break;
                default:
                    errorMessage = 'Wystąpił błąd, prosimy spróbować później';
                    break;
            }
            throw new Error(errorMessage);
        }
    } catch (error) {
        yield put({type: types.LOGIN_USER_ERROR, errorMessage: error.message});
    }
}