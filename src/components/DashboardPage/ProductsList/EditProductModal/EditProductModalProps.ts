import {ProductData} from '../../../../dataModels/ProductData';
import {AppState} from '../../../../redux/store/storeDataModels/AppState';

export default interface EditProductModalProps {
    product: ProductData,
    showModal: boolean,
    handleCloseModal: () => void,
    handleProductsListChanges: () => void,
    store: AppState,
    handleShowRemoveProductModal: (product: ProductData) => void,
}
