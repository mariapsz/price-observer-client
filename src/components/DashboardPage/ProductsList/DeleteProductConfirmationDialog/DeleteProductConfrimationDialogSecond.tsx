import * as React from 'react';
import {ProductData} from '../../../../dataModels/ProductData';
import ReactModal from 'react-modal';

export interface NewProductConfirmationModalState {

}

export interface NewProductConfirmationModalProps {
    product: ProductData,
    showModal: boolean,
}

export class NewProductConfirmationModal extends React.Component<NewProductConfirmationModalProps, NewProductConfirmationModalState> {

    constructor(props: NewProductConfirmationModalProps) {
        super(props);
        this.state = {}
    }

    handleSubmit = () => {

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