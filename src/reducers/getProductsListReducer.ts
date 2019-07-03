import * as types from '../actions';

export default function (state = [], action) {
    switch (action.type) {
        case types.GET_PRODUCTS_LIST_SUCCESS:
            return {...state, response: action.response};
        case types.GET_PRODUCTS_LIST_ERROR:
            return {...state, response: action.response};
        default:
            return state;
    }
};