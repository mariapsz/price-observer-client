import * as React from "react";
import {checkProductService} from '../../../services/productService';
import {NewProductState} from './NewProductState';
import NewProductConfirmationModal from './NewProductConfirmationModal/NewProductConfirmationModal';
import {SectionTitle} from '../../../styles/Common/SectionTitle';
import {NewProductFormFrame} from '../../../styles/NewProduct/Frame';
import {Label} from '../../../styles/NewProduct/Label';
import {URLInput} from '../../../styles/NewProduct/URLInput';
import {NewProductURLWrapper} from '../../../styles/NewProduct/NewProductURLWrapper';
import {FindProductButton} from '../../../styles/NewProduct/Button';
import {NewProductProps} from './NewProductProps';
import {AppState} from '../../../redux/store/storeDataModels/AppState';
import {connect} from 'react-redux';
import {CheckProductRequest} from '../../../dataModels/requests/CheckProductRequest';
import {trackPromise} from 'react-promise-tracker';
import {checkIfTokenExpired} from '../../../utils/checkIfTokenExpired';
import {logoutUser} from '../../../utils/logoutUser';

class NewProduct extends React.Component<NewProductProps, NewProductState> {

    constructor(props: NewProductProps) {
        super(props);
        this.state = {
            productURL: '',
            isSubmitDisabled: true,
            showModal: false,
            product: undefined,
        }
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        const requestData: CheckProductRequest = {
            token: this.props.store.login.token!,
            body: {path: this.state.productURL},
        };
        if (!checkIfTokenExpired(this.props.store.login.token!)) {
            trackPromise(
                checkProductService(requestData)
                    .then((response: any) => {
                        if (response.statusCode === 200) {
                            this.setState({
                                product: response.body,
                            }, () => {
                                this.openModal()
                            });
                        } else {
                            if (response && response.body && response.body.message) {
                                if (response.body.message === 'CANNOT_PARSE_PRODUCT')
                                    this.showErrorModal('Wystąpił błąd, prawdopodobnie podany adres URL produktu jest nieprawidłowy');
                            } else
                                this.showErrorModal('Błąd wewnętrzny serwera, prosimy spróbować później');
                        }
                    }), 'pageWrapper')
        } else {
            alert('Sesja wygasła, prosimy zalogować się ponownie');
            logoutUser();
        }
    };

    handleChange = (event: any) => {
        this.setState({
            productURL: event.target.value,
        })
    };

    handleFormState = (event: any) => {
        this.setState({
            isSubmitDisabled: !event.currentTarget.reportValidity(),
        })
    };

    handleInvalid = (event: any) => {
        event.preventDefault();
    };

    showErrorModal = (message: string) => {
        alert(message);
    };

    openModal = () => {
        this.setState({showModal: true});
    };

    handleCloseModal = () => {
        this.setState({showModal: false});
    };

    setStateInitialValues = (): void => {
        this.setState({
            productURL: '',
            isSubmitDisabled: true,
            showModal: false,
            product: undefined,
        })
    };

    render() {
        return <div>
            <NewProductFormFrame>
                <SectionTitle>NOWY PRODUKT</SectionTitle>
                <form onSubmit={this.handleSubmit} onChange={this.handleFormState}>
                    <Label>
                        Adres URL strony, na której znajduje się produkt (obsługiwane sklepy: morele.net):
                    </Label>
                    <NewProductURLWrapper>
                        <URLInput type="url" name='productURL' value={this.state.productURL}
                                  onChange={this.handleChange}
                                  required onInvalid={this.handleInvalid} maxLength={400}/>
                        <FindProductButton type='submit' value='WYSZUKAJ PRODUKT'
                                           disabled={this.state.isSubmitDisabled}/>
                    </NewProductURLWrapper>
                </form>
            </NewProductFormFrame>
            {this.state.showModal ? <NewProductConfirmationModal
                    product={this.state.product!}
                    showModal={this.state.showModal}
                    handleCloseModal={this.handleCloseModal}
                    handleNewProductAdding={this.props.handleNewProductAdding}
                    clearNewProductPageState={this.setStateInitialValues}
                />
                :
                null}
        </div>
    }
}

const mapStateToProps = (store: AppState) => ({store});

export default connect(mapStateToProps)(NewProduct);
