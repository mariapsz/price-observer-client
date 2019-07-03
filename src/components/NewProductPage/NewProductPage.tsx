import * as React from "react";
import confirm from '../NewProductConfirmationDialog/confirm';
import {addProductService, checkProductService} from '../../services/productOperationsService';
import {AddProductRequest} from '../../DataModels/requests';
import {getCookie} from '../../utils/cookies';
import {COOKIE_NAME_TOKEN, COOKIE_NAME_USER_NAME} from '../../config';
import {NewProductPageState} from './NewProductPageState';

export default class NewProductPage extends React.Component<{}, NewProductPageState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            productURL: '',
            isSubmitDisabled: true,
        }
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        checkProductService(this.state.productURL)
            .then((response: any) => {
                confirm(response.product).then(
                    (product) => {
                        console.log(product);
                        let request: AddProductRequest = {
                            nickname: getCookie(COOKIE_NAME_USER_NAME),
                            JWT: getCookie(COOKIE_NAME_TOKEN),
                            product: {...response.product, product},
                        };
                        addProductService(request).then((response) => {
                                alert(response.message);
                                this.setState({
                                    productURL: '',
                                })
                            },
                            () => {
                                alert('ERROR');
                            })
                    },
                    () => {
                        //do nothing
                    },
                );
            })
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

    render() {
        return (
            <form onSubmit={this.handleSubmit} onChange={this.handleFormState}>
                <input type="url" name='productURL' value={this.state.productURL} onChange={this.handleChange} required/>
                <input type='submit' value='Add item' disabled={this.state.isSubmitDisabled}/>
            </form>
        )
    }
}