import {Product} from '../../../dataModels/Product';

export interface NewProductState {
    productURL: string,
    isSubmitDisabled: boolean,
    showModal: boolean,
    product: Product | undefined,
}