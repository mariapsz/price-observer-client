import * as React from 'react';
import {Product} from '../../../../DataModels/Product';
import ReactModal from 'react-modal';
import {AddProductRequest} from '../../../../DataModels/requests';
import {addProductService} from '../../../../services/productOperationsService';
import {COOKIE_NAME_TOKEN, COOKIE_NAME_USER_NAME} from '../../../../config';
import {getCookie} from '../../../../utils/cookies';

export interface NewProductConfirmationModalState {

}

export interface NewProductConfirmationModalProps {
    product: Product,
    showModal: boolean,
}

export class NewProductConfirmationModal extends React.Component<NewProductConfirmationModalProps, NewProductConfirmationModalState> {

    constructor(props: NewProductConfirmationModalProps) {
        super(props);
        this.state = {}
    }

    handleSubmit = () => {
        let request: AddProductRequest = {
            nickname: getCookie(COOKIE_NAME_USER_NAME),
            JWT: getCookie(COOKIE_NAME_TOKEN),
            product: this.props.product,
        };
        addProductService(request).then((response) => {
                alert(response.message);
            },
            () => {
                alert('ERROR');
            })
    };

    render() {
        return (<ReactModal isOpen={this.props.showModal}>
            <form onSubmit={this.handleSubmit}>
                <div>
                    content
                </div>
                <div>
                    <button>Anuluj</button>
                    <input type='submit' value='Dodaj produkt'/>
                </div>
            </form>
        </ReactModal>)
    }
}