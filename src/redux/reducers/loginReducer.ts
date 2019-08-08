import * as types from '../actions';

export default function (state = [], action: any) {
    switch (action.type) {
        case types.LOGIN_USER_SUCCESS:
            return {...state, token: action.token};
        case types.LOGIN_USER_ERROR:
            return {...state, errorMessage: action.errorMessage};
        case types.LOGIN_ERROR_MESSAGE_READ:
            return {...state, errorMessage: ''};
        default:
            return state;
    }
};