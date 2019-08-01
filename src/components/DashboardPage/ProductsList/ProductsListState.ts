import {ProductData} from '../../../dataModels/ProductData';

export interface ProductsListState {
    showEditProductModal: boolean,
    productsList: any[],
    productToEdit: ProductData | undefined,
}