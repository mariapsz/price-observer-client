import * as types from './index';
import {User} from '../DataModels/User';
import {LoginRequest} from '../DataModels/requests';

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
