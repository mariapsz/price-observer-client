import {Price} from './Price';

export interface Product {
    name: string,
    imgSrc: string,
    currentPrice: Price,
    expectedPrice?: Price,
    sizeOptions?: string[],
}

