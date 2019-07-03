import * as types from './index';
import {User} from '../DataModels/User';

export const registerUserAction = (user: User) => {
  return {
    type: types.REGISTER_USER,
    user,
  }
};

export const loginUserAction = (user: User) => {
  return {
    type: types.LOGIN_USER,
    user,
  }
};
