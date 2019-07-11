import {Product} from '../../../../DataModels/Product';

export interface ConfirmationDialogContentProps {
    handleExpectedPrice: (e: any) => string,
    handleSize: (e: any) => void,
    product: Product,
}