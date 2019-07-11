import {Product} from '../../../../DataModels/Product';

export default interface NewProductConfirmationModalProps {
    product: Product,
    showModal: boolean,
    handleCloseModal: () => void,
}
