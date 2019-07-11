import React from 'react';
import Modal from 'react-modal'
import {confirmable} from 'react-confirm';
import {ConfirmationDialogContent} from '../NewProductConfiramtionDialogContent/ConfirmationDialogContent';
import {NewProductConfirmationDialogState} from './NewProductConfirmationDialogState';
import * as types from '../../../../DataModels/CurrencyTypes';

class NewProductConfirmationDialog extends React.Component<any, NewProductConfirmationDialogState> {

    constructor(props: any) {
        super(props);
        this.state = {
            expectedPrice: undefined,
            productInfoContainsSize: props.confirmation.hasOwnProperty('sizeOptions'),
            size: undefined,
            isAddProductBtnDisabled: true,
        };
        Modal.setAppElement('body');
    }

    handleSize = (e: any): void => {
        this.setState({
            size: e.target.value,
        })
    };

    handleExpectedPrice = (e: any): string => {
        if (e.target.value > this.props.confirmation.currentPrice.number) {
            this.setState({
                expectedPrice: undefined,
            });
            return 'Expected value cannot be bigger than current value';
        } else {
            this.setState({
                expectedPrice: {
                    count: e.target.value,
                    currency: types.PLN,
                }
            });
            return '';
        }
    };

    handleSubmit = () => {
        //glupia nazwa => do zmiany
        let newInfo;
        this.state.productInfoContainsSize ?
            newInfo = {
                expectedPrice: this.state.expectedPrice,
                size: this.state.size,
            }
            :
            newInfo = {
                expectedPrice: this.state.expectedPrice,
            };
        this.props.proceed(newInfo);
    };

    addProductBtnDisabled = () => {
        if (this.state.productInfoContainsSize)
            return !(this.state.expectedPrice && this.state.size);
        return !this.state.expectedPrice;
    };


    render() {
        return (
            <div className="static-modal">
                <Modal isOpen={true} style={{
                    overlay: {
                        width: '70vh',
                        height: '50vh',
                    }
                }
                }>
                    <div>
                        Did you mean this product?
                    </div>
                    <div>
                        <ConfirmationDialogContent
                            handleExpectedPrice={this.handleExpectedPrice}
                            handleSize={this.handleSize}
                            product={this.props.confirmation}
                        />
                    </div>
                    <button disabled={this.addProductBtnDisabled()} onClick={this.handleSubmit}>YES, add product</button>
                    <button onClick={() => this.props.cancel()}>CANCEL</button>
                </Modal>
            </div>
        )
    }
}

export default confirmable(NewProductConfirmationDialog);