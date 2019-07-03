import {Price} from '../../DataModels/Price';

export interface NewProductConfirmationDialogState {
    expectedPrice: Price|undefined,
    productInfoContainsSize: boolean,
    size: string|undefined,
    isAddProductBtnDisabled: boolean,
}