import superagent from 'superagent';
import {LOGIN_API_ENDPOINT, REGISTER_API_ENDPOINT} from '../config';
import {IRegisterRequest} from './IRegisterRequest';
import {ILoginRequest} from './ILoginRequest';

export const registerUserService = (request: IRegisterRequest) => {

    return superagent.post(REGISTER_API_ENDPOINT)
        .send(`name=${request.user.name}`)
        .send(`email=${request.user.email}`)
        .send(`password=${request.user.password}`)
        .then(res => res.body)
};

export const loginUserService = (request: ILoginRequest) => {

    return superagent.post(LOGIN_API_ENDPOINT)
        .send(`email=${request.user.email}`)
        .send(`password=${request.user.password}`)
        .then(res => res.body)
};