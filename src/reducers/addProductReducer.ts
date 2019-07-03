import * as types from '../actions';

export default function (state = [], action) {
    switch (action.type) {
        case types.ADD_PRODUCT_SUCCESS:
            return {...state, response: action.response};
        case types.ADD_PRODUCT_ERROR:
            return {...state, response: action.response};
        default:
            return state;
    }
};