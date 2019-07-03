import superagent from 'superagent';
import {ADD_PRODUCT_API_ENDPOINT, CHECK_PRODUCT_API_ENDPOINT, GET_PRODUCTS_LIST_API_ENDPOINT} from '../config';
import {AuthorizationRequest, Requests} from '../DataModels/requests';

export const checkProductService = (request: URL) => {
    return superagent.post(CHECK_PRODUCT_API_ENDPOINT)
        .send(`data=${request}`)
        .then(res => res.body)
};

export const addProductService = (request: Requests) => {
    return superagent.post(ADD_PRODUCT_API_ENDPOINT)
        .send(`data=${request}`)
        .then(res => res.body)
};

export const getProductsListService = (request: AuthorizationRequest) => {
    return superagent.post(GET_PRODUCTS_LIST_API_ENDPOINT)
        .send(`data=${request}`)
        .then(res => res.body)
};