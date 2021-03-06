import * as React from 'react';
import ReactModal from 'react-modal';
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
import {RemoveProductButton} from '../../../../styles/EditProductModal/RemoveProductButton';
import {EditProductRequest} from '../../../../dataModels/requests/EditProductRequest';
import {editProductService} from '../../../../services/productService';
import {trackPromise} from 'react-promise-tracker';
import {checkIfTokenExpired} from '../../../../utils/checkIfTokenExpired';
import {logoutUser} from '../../../../utils/logoutUser';

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

        const request: EditProductRequest = {
            body: {
                ...this.props.product,
                usersDetails: [{expectedPrice: {count: event.target.expectedPrice.value, currency: 'zł'}}]
                // size: event.target.size.value,
            },
            token: this.props.store.login.token!,
        };
        if (!checkIfTokenExpired(this.props.store.login.token!)) {
            trackPromise(
                editProductService(request).then((response: any) => {
                    if (response.statusCode === 200) {
                        this.showSuccessModal('Produkt został zmodyfikowany pomyślnie!');
                        this.props.handleProductsListChanges();
                    } else {
                        let message;
                        switch (response.body.message) {
                            default:
                                message = 'Wystąpił błąd, prosimy spróbować później';
                                break;
                        }
                        this.showErrorModal(message);
                    }
                    this.props.handleCloseModal();
                }), 'pageWrapper');
        } else {
            alert('Sesja wygasła, prosimy zalogować się ponownie');
            logoutUser();
        }
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
        <Select
            name='size'
            required>
            <option
                disabled selected hidden>
                Wybierz rozmiar
            </option>
            {this.getOptions(this.props.product.sizeOptions!)}
        </Select>
    );

    parseDate = (dateToParse: string): string => {
        const date = new Date(dateToParse);
        return date.toLocaleString();
    };

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
            <form
                onSubmit={this.handleSubmit}
                onChange={this.handleFormState}>
                <FormContentWrapper>
                    <Left>
                        <Image
                            src={this.props.product.imgSrc}
                            alt='product photo'/>
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
                                        <Input
                                            name='expectedPrice'
                                            type='number'
                                            min='0'
                                            max={this.props.product.currentPrice.count - 0.01}
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
                                    <a
                                        href={this.props.product.URL}
                                        target="_blank">
                                        {this.props.product.shopName}
                                    </a>
                                </PropertyLabel>
                            </RowWrapper>
                            <RowWrapper>
                                <Label>
                                    Data dodania:
                                </Label>
                                <PropertyLabel>
                                    {this.parseDate(this.props.product.usersDetails![0].addedAt!)}
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
                            <CancelButton
                                onClick={this.props.handleCloseModal}>
                                ANULUJ
                            </CancelButton>
                            <RemoveProductButton
                                onClick={(e: any) => {
                                    e.preventDefault();
                                    this.props.handleShowRemoveProductModal(this.props.product)
                                }}>
                                USUŃ
                            </RemoveProductButton>
                            <SubmitButton
                                type='submit'
                                value='ZAPISZ'
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