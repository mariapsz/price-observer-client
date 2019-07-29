import {Price} from './Price';

export interface ProductData {
    name: string,
    imgSrc: string,
    currentPrice: Price,
    expectedPrice: Price | undefined,
    sizeOptions: string[] | undefined,
    size: string | undefined,
    dateOfAdding: string | undefined, //Date,
    productId: string | undefined;
    shopName: string | undefined;
    category: string | undefined;
}

