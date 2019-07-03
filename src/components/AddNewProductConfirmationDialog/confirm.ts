import { createConfirmation } from 'react-confirm';
import ConfirmationDialog from './AddNewProductConfirmationDialog';

const confirm = createConfirmation(ConfirmationDialog, 10);

export default function(confirmation, options = {}) {
    return confirm({ confirmation, options });
}