import * as React from 'react';
import ReactModal from 'react-modal';
import {AddProductRequest} from '../../../../dataModels/requests';
import {addProductService} from '../../../../services/productOperationsService';
import {COOKIE_NAME_TOKEN, COOKIE_NAME_USER_NAME} from '../../../../config';
import {getCookie} from '../../../../utils/cookies';
import NewProductConfirmationModalProps from './NewProductConfirmationModalProps';
import NewProductConfirmationModalState from './NewProductConfirmationModalState';
import {FormContentWrapper} from '../../../../styles/NewProductConfirmationModal/FormContentWrapper';
import {Left} from '../../../../styles/NewProductConfirmationModal/Left';
import {ParametersWrapper} from '../../../../styles/NewProductConfirmationModal/ParametersWrapper';
import {ProductNameRowWrapper, RowWrapper} from '../../../../styles/NewProductConfirmationModal/RowWrapper';
import {Image} from '../../../../styles/NewProductConfirmationModal/Image';
import {Label, NameLabel, PriceLabel} from '../../../../styles/NewProductConfirmationModal/Label';
import {Input} from '../../../../styles/NewProductConfirmationModal/Input';
import {CancelButton} from '../../../../styles/NewProductConfirmationModal/CancelButton';
import {SubmitButton} from '../../../../styles/NewProductConfirmationModal/SubmitButton';
import {ButtonsWrapper} from '../../../../styles/NewProductConfirmationModal/ButtonsWrapper';
import {Right} from '../../../../styles/NewProductConfirmationModal/Right';
import {PriceWrapper} from '../../../../styles/NewProductConfirmationModal/PriceWrapper';
import {InputWrapper} from '../../../../styles/NewProductConfirmationModal/InputWrapper';
import {Select} from '../../../../styles/NewProductConfirmationModal/Select';

export class NewProductConfirmationModal extends React.Component<NewProductConfirmationModalProps, NewProductConfirmationModalState> {

    constructor(props: NewProductConfirmationModalProps) {
        super(props);
        this.state = {
            submitButtonDisabled: true,
        };
        ReactModal.setAppElement('body');
    }

    handleSubmit = (event: any) => {
        event.preventDefault();

        const request: AddProductRequest = {
            nickname: getCookie(COOKIE_NAME_USER_NAME),
            JWT: getCookie(COOKIE_NAME_TOKEN),
            product: {
                ...this.props.product,
                size: event.target.size.value,
                expectedPrice: {count: event.target.expectedPrice.value, currency: 'PLN'}
            },
        };

        addProductService(request).then((response) => {
                alert(response.message);
                this.props.handleNewProductAdding();
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
        <Select name='size' required>
            <option disabled selected hidden>Wybierz rozmiar</option>
            {this.getOptions(this.props.product.sizeOptions!)}
        </Select>
    );

    handleFormState = (event: any) => {
        const isDisabled = !event.currentTarget.reportValidity() || (event.currentTarget.size && event.currentTarget.size.value == 'Wybierz rozmiar');
        this.setState({
            submitButtonDisabled: isDisabled,
        })
    };

    handleInvalid = (event: any) => {
        event.preventDefault();
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
                    padding: '5px',
                }
            }}>
            <form onSubmit={this.handleSubmit} onChange={this.handleFormState}>
                <FormContentWrapper>
                    <Left>
                        <Image src={this.props.product.imgSrc} alt='product photo'/>
                    </Left>
                    <Right>
                        <ParametersWrapper>
                            <ProductNameRowWrapper>
                                <NameLabel>
                                    {this.props.product.name}
                                </NameLabel>
                            </ProductNameRowWrapper>
                            <RowWrapper>
                                <Label>Obecna cena:</Label>
                                <PriceWrapper>
                                    <PriceLabel>{this.props.product.currentPrice.count}</PriceLabel>
                                    <PriceLabel>PLN</PriceLabel>
                                </PriceWrapper>
                            </RowWrapper>
                            <RowWrapper>
                                <Label>Oczekiwana cena:</Label>
                                <PriceWrapper>
                                    <InputWrapper>
                                        <Input name='expectedPrice' type='number' min='0'
                                               max={this.props.product.currentPrice.count}
                                               required onInvalid={this.handleInvalid}/>
                                    </InputWrapper>
                                    <PriceLabel>PLN</PriceLabel>
                                </PriceWrapper>
                            </RowWrapper>
                            {this.props.product.sizeOptions &&
                                <RowWrapper>
                                    <Label>
                                        Rozmiar:
                                    </Label>
                                    <Label>
                                        {this.getSelectSizeElement()}
                                    </Label>
                                </RowWrapper>
                            }
                        </ParametersWrapper>
                        <ButtonsWrapper>
                            <CancelButton onClick={this.props.handleCloseModal}>ANULUJ</CancelButton>
                            <SubmitButton type='submit' value='DODAJ PRODUKT'
                                          disabled={this.state.submitButtonDisabled}/>
                        </ButtonsWrapper>
                    </Right>
                </FormContentWrapper>

            </form>
        </ReactModal>
    }
}