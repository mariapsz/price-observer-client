import { createConfirmation } from 'react-confirm';
import ConfirmationDialog from './DeleteProductConfirmationDialog';

const confirm = createConfirmation(ConfirmationDialog, 10);

export default function(confirmation: any, options = {}) {
    return confirm({ confirmation, options });
}