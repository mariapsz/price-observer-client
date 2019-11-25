import * as types from '../actions';

export default function (state = [], action: any) {
    console.log('sorting reducer, action: ', action);
    switch (action.type) {
        case types.SORTING_PRODUCTS_TYPE_CHANGED:
            return {...state, sortedBy: action.sortProductsBy};
        default:
            return state;
    }
};