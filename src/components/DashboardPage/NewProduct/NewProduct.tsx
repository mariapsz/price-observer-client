import * as React from "react";
import {checkProductService} from '../../../services/productOperationsService';
import {NewProductState} from './NewProductState';
import {NewProductConfirmationModal} from './NewProductConfirmationModal/NewProductConfirmationModal';
import {connect} from 'react-redux';
import {
    FindProductButton,
    SectionTitle,
    URLInput,
    Label,
    NewProductURLWrapper,
    NewProductFormFrame,
} from "Styles/NewProductStyles";

class NewProduct extends React.Component<{}, NewProductState> {

    constructor(props: {}) {
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
        checkProductService(this.state.productURL)
            .then((response: any) => {
                this.setState({
                    product: response.product,
                }, () => {
                    console.log('newProductPage product: ', this.state.product);
                    this.openModal()
                });
            })
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

    openModal = () => {
        this.setState({showModal: true});
    };

    handleCloseModal = () => {
        this.setState({showModal: false});
    };

    render() {
        return <div>
            <NewProductFormFrame>
                <SectionTitle>NOWY PRODUKT</SectionTitle>
                <form onSubmit={this.handleSubmit} onChange={this.handleFormState}>
                    <Label>
                        Adres URL strony, na której znajduje się produkt:
                    </Label>
                    <NewProductURLWrapper>
                        <URLInput type="url" name='productURL' value={this.state.productURL} onChange={this.handleChange}
                               required onInvalid={this.handleInvalid} maxLength={400}/>
                        <FindProductButton type='submit' value='WYSZUKAJ PRODUKT' disabled={this.state.isSubmitDisabled}/>
                    </NewProductURLWrapper>
                </form>
            </NewProductFormFrame>
            {this.state.showModal ? <NewProductConfirmationModal
                    product={this.state.product!}
                    showModal={this.state.showModal}
                    handleCloseModal={this.handleCloseModal}
                />
                :
                null}
        </div>
    }
}

const mapStateToProps = (store: any) => ({store});

export default connect(mapStateToProps)(NewProduct);