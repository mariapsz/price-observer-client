import * as React from 'react';
import ReactModal from 'react-modal';
import {AddProductRequest} from '../../../../dataModels/requests';
import {addProductService} from '../../../../services/productOperationsService';
import {COOKIE_NAME_TOKEN, COOKIE_NAME_USER_NAME} from '../../../../config';
import {getCookie} from '../../../../utils/cookies';
import NewProductConfirmationModalProps from './NewProductConfirmationModalProps';
import NewProductConfirmationModalState from './NewProductConfirmationModalState';


export class NewProductConfirmationModal extends React.Component<NewProductConfirmationModalProps, NewProductConfirmationModalState> {

    constructor(props: NewProductConfirmationModalProps) {
        super(props);
        this.state = {
            submitButtonDisabled: true,
        };
        ReactModal.setAppElement('body');
    }

    handleSubmit = (e: any) => {
        e.preventDefault();

        const request: AddProductRequest = {
            nickname: getCookie(COOKIE_NAME_USER_NAME),
            JWT: getCookie(COOKIE_NAME_TOKEN),
            product: {
                ...this.props.product,
                size: e.target.size.value,
                expectedPrice: {count: e.target.expectedPrice.value, currency: 'PLN'}
            },
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
            <option disabled selected>Wybierz rozmiar</option>
            {this.getOptions(this.props.product.sizeOptions!)}
        </select>
    );

    handleFormState = (e: any) => {
        const isDisabled = !e.currentTarget.reportValidity() || e.currentTarget.size.value == 'Wybierz rozmiar';
        this.setState({
            submitButtonDisabled: isDisabled,
        })
    };

    render() {
        return <ReactModal
            isOpen={this.props.showModal}
            style={{
                overlay: {},
                content: {
                    color: 'lightsteelblue',
                    width: '400px',
                    height: '400px',
                    left: '200px'
                }
            }}>
            <form onSubmit={this.handleSubmit} onChange={this.handleFormState}>
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
                        <input name='expectedPrice' type='number' min='0' max={this.props.product.currentPrice.count}
                               required/>
                        <div>PLN</div>
                    </div>
                </div>
                <div>
                    <button onClick={this.props.handleCloseModal}>Anuluj</button>
                    <input type='submit' value='Dodaj produkt' disabled={this.state.submitButtonDisabled}/>
                </div>
            </form>
        </ReactModal>
    }
}