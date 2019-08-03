import {ProductData} from '../ProductData';
import {Price} from '../Price';

export interface AddProductRequest {
    token: string,
    body: {
        product: ProductData,
        userData: { expectedPrice: Price }
    },
}