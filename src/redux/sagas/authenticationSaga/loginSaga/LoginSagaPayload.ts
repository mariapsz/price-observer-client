import {LoginRequestBody} from '../../../../dataModels/requests';

export interface LoginSagaPayload {
    type: string,
    requestBody: LoginRequestBody,
}