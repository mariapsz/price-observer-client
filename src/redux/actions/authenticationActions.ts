import * as types from './index';
import {LoginRequest} from '../../dataModels/requests/LoginRequest';

export const loginUserAction = (requestBody: LoginRequest) => {
  return {
    type: types.LOGIN_USER,
    requestBody,
  }
};

export const loginErrorMessageRead = () => {
  return {
    type: types.LOGIN_ERROR_MESSAGE_READ,
  }
};
