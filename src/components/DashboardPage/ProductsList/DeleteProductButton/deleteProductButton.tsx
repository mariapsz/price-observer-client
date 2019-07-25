import * as React from 'react';
import confirm from '../DeleteProductConfirmationDialog/confirm';
import {DeleteBtn} from './DeleteButtonStyles';
import {DeleteProductButtonProps} from './DeleteProductButtonProps';

export const DeleteButton = (props: DeleteProductButtonProps) => {

    const removeProduct = () => {
        confirm(props.product).then(
            () => {
                console.log('Delete button: now create function to remove product')
            },
            () => {}
        )
    };

    return (<DeleteBtn onClick={removeProduct}>
            &#10006;
        </DeleteBtn>
    )
};