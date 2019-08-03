import * as React from 'react';
import ReactModal from 'react-modal';
import {addProductService} from '../../../../services/productOperationsService';
import EditProductModalProps from './EditProductModalProps';
import EditProductModalState from './EditProductModalState';
import {FormContentWrapper} from '../../../../styles/EditProductModal/FormContentWrapper';
import {Left} from '../../../../styles/EditProductModal/Left';
import {ParametersWrapper} from '../../../../styles/EditProductModal/ParametersWrapper';
import {ProductNameRowWrapper, RowWrapper} from '../../../../styles/EditProductModal/RowWrapper';
import {Image} from '../../../../styles/EditProductModal/Image';
import {Label, NameLabel, PriceLabel, PropertyLabel} from '../../../../styles/EditProductModal/Label';
import {Input} from '../../../../styles/EditProductModal/Input';
import {CancelButton} from '../../../../styles/EditProductModal/CancelButton';
import {SubmitButton} from '../../../../styles/EditProductModal/SubmitButton';
import {ButtonsWrapper} from '../../../../styles/EditProductModal/ButtonsWrapper';
import {Right} from '../../../../styles/EditProductModal/Right';
import {PriceWrapper} from '../../../../styles/EditProductModal/PriceWrapper';
import {InputWrapper} from '../../../../styles/EditProductModal/InputWrapper';
import {Select} from '../../../../styles/EditProductModal/Select';
import {connect} from 'react-redux';
import {AppState} from '../../../../redux/store/storeDataModels/AppState';
import {AddProductRequest} from '../../../../dataModels/requests/AddProductRequest';
import {trackPromise} from 'react-promise-tracker';
import {RemoveProductButton} from '../../../../styles/EditProductModal/RemoveProductButton';

class EditProductModal extends React.Component<EditProductModalProps, EditProductModalState> {

    constructor(props: EditProductModalProps) {
        super(props);
        this.state = {
            submitButtonDisabled: true,
        };
        ReactModal.setAppElement('body');
    }

    handleSubmit = (event: any) => {
        event.preventDefault();

        const request: AddProductRequest = {
            body: {
                product: this.props.product,
                // size: event.target.size.value,
                userData: {expectedPrice: {count: event.target.expectedPrice.value, currency: 'zł'}}
            },
            token: this.props.store.login.token!,
        };

        trackPromise(
            addProductService(request).then((response: any) => {
                if (response.statusCode === 200) {
                    this.showSuccessModal('Produkt został dodany!');
                    this.props.handleProductsListChanges();
                } else {
                    let message;
                    switch (response.body.message) {
                        case 'THIS_DOMAIN_IS_NOT_SUPPORTED':
                            message = 'Niestety jeszcze nie obsługujemy tego serwisu';
                            break;
                        case 'USER_ALREADY_ASSIGNED_TO_PRODUCT':
                            message = 'Ten produkt już został dodany. \nJeżeli chcesz go edytować, znajdź dany produkt na liście Twoich produktów i kliknij w odpowiadający mu wiersz w tabeli';
                            break;
                        default:
                            message = 'Wystąpił błąd, prosimy spróbować później';
                            break;
                    }
                    this.showErrorModal(message);
                }
                this.props.handleCloseModal();
            }), 'pageWrapper');
    };

    showSuccessModal = (message: string) => {
        alert(message);
    };

    showErrorModal = (message: string) => {
        alert(message);
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

    handleInvalid = (event: React.InvalidEvent<HTMLInputElement>) => {
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
                            <RowWrapper>
                                <Label>
                                    Sklep:
                                </Label>
                                <PropertyLabel>
                                    {this.props.product.shopName}
                                </PropertyLabel>
                            </RowWrapper>
                            <RowWrapper>
                                <Label>
                                    Data dodania:
                                </Label>
                                <PropertyLabel>
                                    {this.props.product.dateOfAdding}
                                </PropertyLabel>
                            </RowWrapper>
                            <RowWrapper>
                                <Label>
                                    Kategoria:
                                 </Label>
                                <PropertyLabel>
                                    {this.props.product.category}
                                </PropertyLabel>
                            </RowWrapper>
                        </ParametersWrapper>
                        <ButtonsWrapper>
                            <CancelButton onClick={this.props.handleCloseModal}>ANULUJ</CancelButton>
                            <RemoveProductButton onClick={this.props.handleCloseModal}>USUŃ</RemoveProductButton>
                            <SubmitButton type='submit' value='ZAPISZ'
                                          disabled={this.state.submitButtonDisabled}/>
                        </ButtonsWrapper>
                    </Right>
                </FormContentWrapper>

            </form>
        </ReactModal>
    }
}

const mapStateToProps = (store: AppState) => ({store});

export default connect(mapStateToProps)(EditProductModal);