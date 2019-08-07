import superagent, {post, Response} from 'superagent';
import {CHANGE_PASSWORD_API_ENDPOINT, RESET_PASSWORD_API_ENDPOINT} from '../config';
import {AuthorizationRequest} from '../dataModels/requests';
import {ResetPasswordRequest} from '../dataModels/requests/ResetPasswordRequest';

export const changePasswordService = (request: AuthorizationRequest) => {
    return superagent.post(CHANGE_PASSWORD_API_ENDPOINT)
        .send(`data=${request}`)
        .then(res => res.body)
};

export const resetPasswordService = (request: ResetPasswordRequest): Promise<Response> => {
    return post(RESET_PASSWORD_API_ENDPOINT)
        .send(JSON.stringify(request.body))
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .then(res => res)
        .catch(error => error.response)
};