import * as types from '../actions';

export default function (state = [], action: any) {
    switch (action.type) {
        case types.LOGIN_USER_SUCCESS:
            return {...state, token: action.token};
        case types.LOGIN_USER_ERROR:
            return {...state, errorMessage: action.errorMessage};
        default:
            return state;
    }
};