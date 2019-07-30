import {post, Response} from 'superagent';
import {LOGIN_API_ENDPOINT, REGISTER_API_ENDPOINT} from '../config';
import {RegisterRequest} from '../dataModels/requests/RegisterRequest';
import {LoginRequest} from '../dataModels/requests/LoginRequest';

export const registerUserService = (request: RegisterRequest): Promise<Response> => {
    return post(REGISTER_API_ENDPOINT)
        .send(JSON.stringify(request.body))
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .then(res => res)
        .catch(error => error.response)
};

export const loginUserService = (request: LoginRequest): Promise<Response> => {
    return post(LOGIN_API_ENDPOINT)
        .send(JSON.stringify(request.body))
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .then(response => response)
        .catch(error => error.response)
};
