import {ProductData} from '../ProductData';

export interface EditProductRequest {
    body: ProductData,
    token: string,
}