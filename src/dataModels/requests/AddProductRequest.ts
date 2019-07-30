import {ProductData} from '../ProductData';

export interface AddProductRequest {
    token: string,
    body: ProductData,
}