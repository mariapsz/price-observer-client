import * as types from './index';
import {User} from '../DataModels/User';

export const changePassword = (user: User) => {
    return {
        type: types.CHANGE_PASSWORD,
        user,
    }
};