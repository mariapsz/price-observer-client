import {post, Response} from 'superagent';
import {LOGIN_API_ENDPOINT, REGISTER_API_ENDPOINT} from '../config';
import {LoginRequestBody, RegisterRequest} from '../dataModels/requests';

export const registerUserService = (body: RegisterRequest): Promise<Response> => {
    return post(REGISTER_API_ENDPOINT)
        .send(JSON.stringify(body))
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .then(res => res)
        .catch(error => error.response)
};

export const loginUserService = (body: LoginRequestBody): Promise<Response> => {
    return post(LOGIN_API_ENDPOINT)
        .send(JSON.stringify(body))
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .then(response => response)
        .catch(error => error.response)
};
