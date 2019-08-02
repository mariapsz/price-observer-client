import {ProductData} from '../../../../dataModels/ProductData';
import {AppState} from '../../../../redux/store/storeDataModels/AppState';

export interface RemoveProductModalProps {
    product: ProductData,
    showModal: boolean,
    handleCloseModal: () => void,
    handleProductsListChanges: () => void,
    store: AppState,
}