import {ProductData} from '../../../../dataModels/ProductData';
import {AppState} from '../../../../redux/store/storeDataModels/AppState';

export default interface NewProductConfirmationModalProps {
    product: ProductData,
    showModal: boolean,
    handleCloseModal: () => void,
    handleNewProductAdding: () => void,
    store: AppState,
    clearNewProductPageState: () => void,
}
