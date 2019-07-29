import {ProductData} from '../../../dataModels/ProductData';

export interface NewProductState {
    productURL: string,
    isSubmitDisabled: boolean,
    showModal: boolean,
    product: ProductData | undefined,
}