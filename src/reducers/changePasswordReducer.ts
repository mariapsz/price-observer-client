import * as types from '../actions';

export default function (state = [], action) {
    switch (action.type) {
        case types.CHANGE_PASSWORD_SUCCESS:
            return {...state, response: action.response};
        case types.CHANGE_PASSWORD_ERROR:
            return {...state, response: action.response};
        default:
            return state;
    }
};