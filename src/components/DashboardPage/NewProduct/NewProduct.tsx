import * as React from "react";
import {addProductService, checkProductService} from '../../../services/productOperationsService';
import {AddProductRequest} from '../../../DataModels/requests';
import {getCookie} from '../../../utils/cookies';
import {COOKIE_NAME_TOKEN, COOKIE_NAME_USER_NAME} from '../../../config';
import {NewProductState} from './NewProductState';
import ReactModal from 'react-modal';
import {NewProductConfirmationModal} from './NewProductConfirmationModal/NewProductConfirmationModal';

export default class NewProduct extends React.Component<{}, NewProductState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            productURL: '',
            isSubmitDisabled: true,
            showModal: false,
            product: undefined,
        }
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        checkProductService(this.state.productURL)
            .then((response: any) => {
                this.setState({
                    product: response.product,
                }, () => {
                    console.log('newProductPage product: ', this.state.product);
                    this.openModal()
                });
            })
        //            (product) => {
        //                console.log(product);
        //                let request: AddProductRequest = {
        //                    nickname: getCookie(COOKIE_NAME_USER_NAME),
        //                    JWT: getCookie(COOKIE_NAME_TOKEN),
        //                    product: {...response.product, product},
        //                };
        //                addProductService(request).then((response) => {
        //                        alert(response.message);
        //                        this.setState({
        //                            productURL: '',
        //                        })
        //                    },
        //                    () => {
        //                        alert('ERROR');
        //                    })
        //            },
        //            () => {
        //                //do nothing
        //            },
        //        );
        //    })
    };

    handleChange = (e: any) => {
        this.setState({
            productURL: e.target.value,
        })
    };

    handleFormState = (e: any) => {
        this.setState({
            isSubmitDisabled: !e.currentTarget.reportValidity(),
        })
    };

    openModal = () => {
        this.setState({showModal: true});
    };

    handleCloseModal = () => {
        this.setState({showModal: false});
    };

    render() {
        return <div>
            <form onSubmit={this.handleSubmit} onChange={this.handleFormState}>
                <input type="url" name='productURL' value={this.state.productURL} onChange={this.handleChange}
                       required/>
                <input type='submit' value='Add item' disabled={this.state.isSubmitDisabled}/>
            </form>
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