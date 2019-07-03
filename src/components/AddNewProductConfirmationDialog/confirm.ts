import { createConfirmation } from 'react-confirm';
import ConfirmationDialog from './AddNewProductConfirmationDialog';
import {Product} from '../../DataModels/Product';

const confirm = createConfirmation(ConfirmationDialog, 10);

export default function(confirmation: Product, options = {}) {
    return confirm({ confirmation, options });
}