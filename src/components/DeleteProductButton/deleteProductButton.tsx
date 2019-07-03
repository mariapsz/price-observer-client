import * as React from 'react';
import confirm from '../DeleteProductConfirmationDialog/confirm';
import {DeleteBtn} from './DeleteButtonStyles';
import {DeleteProductButtonProps} from './DeleteProductButtonProps';

export const DeleteButton = (props: DeleteProductButtonProps) => {

    const removeUser = () => {
        confirm(`Are you sure? Product ${props.product.name} will be removed.`).then(
            () => {
                console.log('Delete button: now create function to remove product')
            },
            () => {}
        )
    };

    return (<DeleteBtn onClick={removeUser}>
            &#10006;
        </DeleteBtn>
    )
};