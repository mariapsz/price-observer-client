import * as types from './index';
import {IUser} from './IUser';

export const registerUserAction = (user: IUser) => {
  return {
    type: types.REGISTER_USER,
    user,
  }
};

export const loginUserAction = (user: IUser) => {
  return {
    type: types.LOGIN_USER,
    user,
  }
};
