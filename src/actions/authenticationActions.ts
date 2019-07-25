import * as types from './index';
import {User} from '../dataModels/User';
import {LoginRequest} from '../dataModels/requests';

export const registerUserAction = (user: User) => {
  return {
    type: types.REGISTER_USER,
    user,
  }
};

export const loginUserAction = (user: LoginRequest) => {
  return {
    type: types.LOGIN_USER,
    user,
  }
};
