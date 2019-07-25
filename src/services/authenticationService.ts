import superagent from 'superagent';
import {LOGIN_API_ENDPOINT, REGISTER_API_ENDPOINT} from '../config';
import {LoginRequest, RegisterRequest} from '../dataModels/requests';

export const registerUserService = (request: RegisterRequest) => {
    return superagent.post(REGISTER_API_ENDPOINT)
        .send(`name=${request.nickname}`)
        .send(`email=${request.email}`)
        .send(`password=${request.password}`)
        .then(res => res.body)
};

export const loginUserService = (request: LoginRequest) => {
    console.log(request);
    return superagent.post(LOGIN_API_ENDPOINT)
        .send(`email=${request.email}`)
        .send(`password=${request.password}`)
        .then(res => res.body)
};