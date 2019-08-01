import { createConfirmation } from 'react-confirm';
import ConfirmationDialog from './DeleteProductConfirmationModal';
import {ProductData} from '../../../../dataModels/ProductData';

const confirm = createConfirmation(ConfirmationDialog, 10);

export default function(confirmation: ProductData, options = {}) {
    return confirm({ confirmation, options });
}