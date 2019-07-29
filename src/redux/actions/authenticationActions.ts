import * as types from './index';
import {LoginRequestBody} from '../../dataModels/requests';

export const loginUserAction = (requestBody: LoginRequestBody) => {
  return {
    type: types.LOGIN_USER,
    requestBody,
  }
};
