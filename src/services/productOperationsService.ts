import superagent from 'superagent';
import {ADD_PRODUCT_API_ENDPOINT, CHECK_PRODUCT_API_ENDPOINT, GET_PRODUCTS_LIST_API_ENDPOINT} from '../config';
import {AuthorizationRequest, AddProductRequest} from '../dataModels/requests';

export const checkProductService = (request: string) => {
    return superagent.post(CHECK_PRODUCT_API_ENDPOINT)
        .send(JSON.stringify({path: request}))
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .then(res => res)
        .catch(error => error.response)
};

export const addProductService = (request: AddProductRequest) => {
    return superagent.post(ADD_PRODUCT_API_ENDPOINT)
        .send(`data=${request}`)
        .then(res => res.body)
};

export const getProductsListService = (request: AuthorizationRequest) => {
    return superagent.post(GET_PRODUCTS_LIST_API_ENDPOINT)
        .send(`data=${request}`)
        .then(res => res.body)
};