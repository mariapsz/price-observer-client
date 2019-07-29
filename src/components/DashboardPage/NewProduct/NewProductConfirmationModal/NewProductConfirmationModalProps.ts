import {ProductData} from '../../../../dataModels/ProductData';

export default interface NewProductConfirmationModalProps {
    product: ProductData,
    showModal: boolean,
    handleCloseModal: () => void,
    handleNewProductAdding: () => void,
}
