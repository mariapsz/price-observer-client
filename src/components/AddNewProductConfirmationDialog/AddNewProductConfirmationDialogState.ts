import {Price} from '../../DataModels/Price';

export interface AddNewProductConfirmationDialogState {
    expectedPrice: Price|undefined,
    productInfoContainsSize: boolean,
    size: string|undefined,
    isAddProductBtnDisabled: boolean,
}