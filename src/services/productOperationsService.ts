import superagent from 'superagent';
import {ADD_PRODUCT_API_ENDPOINT, CHECK_PRODUCT_API_ENDPOINT, GET_PRODUCTS_LIST_API_ENDPOINT} from '../config';
import {CheckProductRequest} from '../dataModels/requests/CheckProductRequest';
import {AddProductRequest} from '../dataModels/requests/AddProductRequest';
import {GetProductsListRequest} from '../dataModels/requests/GetProductsListRequest';

export const checkProductService = (request: CheckProductRequest) => {
    return superagent.post(CHECK_PRODUCT_API_ENDPOINT)
        .send(JSON.stringify(request.body))
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .set('Authorization', `${request.token}`)
        .then(res => res)
        .catch(error => error.response)
};

export const addProductService = (request: AddProductRequest) => {
    return superagent.post(ADD_PRODUCT_API_ENDPOINT)
        .send(JSON.stringify(request.body))
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .set('Authorization', `${request.token}`)
        .then(res => res)
        .catch(error => error.response)
};

export const getProductsListService = (request: GetProductsListRequest) => {
    return superagent.get(GET_PRODUCTS_LIST_API_ENDPOINT)
        .set('Accept', 'application/json')
        .set('Authorization', `${request.token}`)
        .then(res => res)
        .catch(error => error.response)
};