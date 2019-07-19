import superagent from 'superagent';
import {LOGIN_API_ENDPOINT, REGISTER_API_ENDPOINT} from '../config';
import {LoginRequest, RegisterRequest} from '../DataModels/requests';
import {myContainer} from '../DI/inversify.config';
import {TYPES} from '../DI/types';

export const registerUserService = (request: RegisterRequest) => {
    return superagent.post(REGISTER_API_ENDPOINT)
        .send(`name=${request.nickname}`)
        .send(`email=${request.email}`)
        .send(`password=${request.password}`)
        .then(res => res.body)
};

export const loginUserService = (request: LoginRequest) => {
    const LOGIN_API_FROM_CONTAINER =  myContainer.get<string>(TYPES.LOGIN_API_ENDPOINT);
    console.log(LOGIN_API_FROM_CONTAINER);
    console.log(process.env.CONNECTION_URL);
    return superagent.post(LOGIN_API_FROM_CONTAINER)
        .send(`email=${request.email}`)
        .send(`password=${request.password}`)
        .then(res => res.body)
};