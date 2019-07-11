import * as React from 'react';
import {Product} from '../../../../DataModels/Product';
import ReactModal from 'react-modal';
import {AddProductRequest} from '../../../../DataModels/requests';
import {addProductService} from '../../../../services/productOperationsService';
import {COOKIE_NAME_TOKEN, COOKIE_NAME_USER_NAME} from '../../../../config';
import {getCookie} from '../../../../utils/cookies';
import Modal from '../NewProductConfirmationDialog/NewProductConfirmationDialog';

export interface NewProductConfirmationModalState {

}

export interface NewProductConfirmationModalProps {
    product: Product,
    showModal: boolean,
    handleCloseModal: () => void,
}

export class NewProductConfirmationModal extends React.Component<NewProductConfirmationModalProps, NewProductConfirmationModalState> {

    constructor(props: NewProductConfirmationModalProps) {
        super(props);
        this.state = {};
        ReactModal.setAppElement('body');
        console.log('NewProductConfirmationModal constructor: props', this.props);
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        let pro = {...this.props.product, size: e.target.input.size, expectedPrice: e.target.input.expectedPrice };
        console.log('pro', pro);

        let request: AddProductRequest = {
            nickname: getCookie(COOKIE_NAME_USER_NAME),
            JWT: getCookie(COOKIE_NAME_TOKEN),
            product: this.props.product,
        };
        addProductService(request).then((response) => {
                alert(response.message);
                this.props.handleCloseModal();
            },
            () => {
                alert('ERROR');
                //this.props.handleCloseModal();
            })
    };

    getOptions = (optionsArr: string[]) => (
        optionsArr.map((option: string, i: number) => <option key={i} value={option}>{option}</option>)
    );

    getSelectSizeElement = () => (
        <select name='size' required>
            <option disabled selected> select size</option>
            {this.getOptions(this.props.product.sizeOptions!)}
        </select>
    );

    render() {
        return <ReactModal
            isOpen={this.props.showModal}
            style={{
                overlay: {
                },
                content: {
                    color: 'lightsteelblue',
                    width: '200px',
                    height: '300px',
                    left: '200px'
                }
            }}>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <div>
                        <img src={this.props.product.imgSrc} alt='product photo'
                             style={{height: '60px', width: '60px'}}/>
                    </div>
                    {!this.props.product.hasOwnProperty('sizeOptions') ?
                        null
                        :
                        <div>
                            <div>
                                size
                            </div>
                            <div>
                                {this.getSelectSizeElement()}
                            </div>
                        </div>
                    }
                    <div>
                        <div>Current price</div>
                        <div>{this.props.product.currentPrice.count}</div>
                        <div>PLN</div>
                    </div>
                    <div>
                        <div>Expected price</div>
                        <input name='expectedPrice' type='number' min='0' max='1000000' required/>
                        <div>PLN</div>
                        {/*<div>{this.state.expectedPriceErrorMessage}</div>*/}
                    </div>
                </div>
                <div>
                    <button onClick={this.props.handleCloseModal}>Anuluj</button>
                    <input type='submit' value='Dodaj produkt'/>
                </div>
            </form>
        </ReactModal>
    }
}