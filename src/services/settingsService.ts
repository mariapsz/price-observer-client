import superagent from 'superagent';
import {CHANGE_PASSWORD_API_ENDPOINT} from '../config';
import {AuthorizationRequest} from '../dataModels/requests';

export const changePasswordService = (request: AuthorizationRequest) => {
    return superagent.post(CHANGE_PASSWORD_API_ENDPOINT)
        .send(`data=${request}`)
        .then(res => res.body)
};