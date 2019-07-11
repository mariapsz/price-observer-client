import {Product} from '../../../DataModels/Product';

export interface NewProductState {
    productURL: string,
    isSubmitDisabled: boolean,
    showModal: boolean,
    product: Product | undefined,
}