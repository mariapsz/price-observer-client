import * as types from '../actions';

export default function (state = [], action: any) {
    switch (action.type) {
        case types.LOGIN_USER_SUCCESS:
            return {...state, response: action.response};
        case types.LOGIN_USER_ERROR:
            return {...state, response: action.response};
        default:
            return state;
    }
};