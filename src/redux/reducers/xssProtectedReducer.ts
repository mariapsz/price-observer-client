import * as types from '../actions';

export default function (state = false, action: any) {
    switch (action.type) {
        case types.XSS_PROTECTED_CHANGED:
            return action.payload.xssProtected;
        default:
            return state;
    }
};