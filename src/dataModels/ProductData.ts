import {Price} from './Price';
import {ProductUserDetails} from './ProductUserDetails';

export interface ProductData {
    name: string,
    imgSrc: string,
    currentPrice: Price,
    sizeOptions?: string[] | undefined,
    size?: string | undefined,
    productId: string | undefined;
    shopName: string | undefined;
    category: string | undefined;
    usersDetails: ProductUserDetails[] | undefined;
    URL: string;
}

