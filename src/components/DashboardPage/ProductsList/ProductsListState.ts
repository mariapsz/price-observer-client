import {ProductData} from '../../../dataModels/ProductData';

export interface ProductsListState {
    showEditProductModal: boolean,
    showRemoveProductModal: boolean,
    productsList: any[],
    productToEdit: ProductData | undefined,
    productToRemove: ProductData | undefined,
}