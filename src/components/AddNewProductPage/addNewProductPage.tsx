import * as React from "react";
import confirm from '../AddNewProductConfirmationDialog/confirm';
import {addProductService, checkProductService} from '../../services/productOperationsService';
import {Product} from '../../DataModels/Product';
import {AddProductRequest} from '../../DataModels/requests';
import {getCookie} from '../../utils/cookies';
import {COOKIE_NAME_TOKEN, COOKIE_NAME_USER_NAME} from '../../config';

export default class AddNewProductPage extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            productURL: '',
        }
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        checkProductService(e.target.input.url)
            .then((product: Product) => {
                confirm(product).then(
                    (product) => {
                        let request: AddProductRequest = {
                            nickname: getCookie(COOKIE_NAME_USER_NAME),
                            JWT: getCookie(COOKIE_NAME_TOKEN),
                            product: JSON.parse(product),
                        };
                        addProductService(request).then((response) => {
                                alert(response.message);
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

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="url" name='productURL' value={this.state.productURL} onChange={this.handleChange}/>
                <input type='submit' value='Add item'/>
            </form>
        )
    }
}