import * as React from 'react';
import ReactModal from 'react-modal';
import {AddProductRequest} from '../../../../dataModels/requests';
import {addProductService} from '../../../../services/productOperationsService';
import {COOKIE_NAME_TOKEN, COOKIE_NAME_USER_NAME} from '../../../../config';
import {getCookie} from '../../../../utils/cookies';
import NewProductConfirmationModalProps from './NewProductConfirmationModalProps';
import NewProductConfirmationModalState from './NewProductConfirmationModalState';
import {FormContentWrapper} from '../../../../styles/NewProductConfirmationModal/FormContentWrapper';
import {ImageWrapper} from '../../../../styles/NewProductConfirmationModal/ImageWrapper';
import {ParametersWrapper} from '../../../../styles/NewProductConfirmationModal/ParametersWrapper';
import {RowWrapper} from '../../../../styles/NewProductConfirmationModal/RowWrapper';


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
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'lightsteelblue',
                    right: 'initial',
                    bottom: 'initial',
                }
            }}>
            <form onSubmit={this.handleSubmit} onChange={this.handleFormState}>
                <FormContentWrapper>
                    <ImageWrapper>
                        <img src={this.props.product.imgSrc} alt='product photo'
                             style={{height: '60px', width: '60px'}}/>
                    </ImageWrapper>
                    <ParametersWrapper>
                        {!this.props.product.hasOwnProperty('sizeOptions') ?
                            null
                            :
                            <RowWrapper>
                                <div>
                                    size
                                </div>
                                <div>
                                    {this.getSelectSizeElement()}
                                </div>
                            </RowWrapper>
                        }
                        <RowWrapper>
                            <div>Current price</div>
                            <div>{this.props.product.currentPrice.count}</div>
                            <div>PLN</div>
                        </RowWrapper>
                        <RowWrapper>
                            <div>Expected price</div>
                            <input name='expectedPrice' type='number' min='0'
                                   max={this.props.product.currentPrice.count}
                                   required/>
                            <div>PLN</div>
                        </RowWrapper>
                    </ParametersWrapper>
                </FormContentWrapper>
                <div>
                    <button onClick={this.props.handleCloseModal}>Anuluj</button>
                    <input type='submit' value='Dodaj produkt' disabled={this.state.submitButtonDisabled}/>
                </div>
            </form>
        </ReactModal>
    }
}