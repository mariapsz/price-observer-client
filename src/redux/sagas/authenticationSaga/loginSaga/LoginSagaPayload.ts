import {LoginRequest} from '../../../../dataModels/requests/LoginRequest';

export interface LoginSagaPayload {
    type: string,
    requestBody: LoginRequest,
}