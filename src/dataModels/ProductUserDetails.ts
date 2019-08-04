import {Price} from './Price';

export interface ProductUserDetails {
    expectedPrice: Price,
    addedAt?: string | undefined,
}