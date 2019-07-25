import {Product} from '../../../../dataModels/Product';

export default interface NewProductConfirmationModalProps {
    product: Product,
    showModal: boolean,
    handleCloseModal: () => void,
}
