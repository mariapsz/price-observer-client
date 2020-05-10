import {post, Response} from 'superagent';
import {CHANGE_PASSWORD_API_ENDPOINT, RESET_PASSWORD_API_ENDPOINT} from '../config';
import {ResetPasswordRequest} from '../dataModels/requests/ResetPasswordRequest';
import {ChangePasswordRequest} from '../dataModels/requests/ChangePasswordRequest';

export const changePasswordService = (request: ChangePasswordRequest) => {
    return post(CHANGE_PASSWORD_API_ENDPOINT)
        .send(JSON.stringify(request.body))
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .set('Authorization', `${request.token}`)
        .then(res => res)
        .catch(error => error.response)
};

export const resetPasswordService = (request: ResetPasswordRequest): Promise<Response> => {
    return post(RESET_PASSWORD_API_ENDPOINT)
        .send(JSON.stringify(request.body))
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .then(res => res)
        .catch(error => error.response)
};