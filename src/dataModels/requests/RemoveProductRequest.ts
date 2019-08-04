import {ProductData} from '../ProductData';

export interface RemoveProductRequest {
    body: ProductData,
    token: string,
}