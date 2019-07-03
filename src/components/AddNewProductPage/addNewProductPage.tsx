import * as React from "react";
import confirm from '../AddNewProductConfirmationDialog/confirm';
import {connect} from 'react-redux';
import {addProduct, checkProduct} from '../../actions/productActions';


class AddNewProductPage extends React.Component<any,any> {

    constructor(props: any) {
        super(props);
        this.state = {
            productURL: '',
        }
    }

    handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.dispatch(checkProduct( e.target.productURL.value as URL));
    };

    showConfirmationModal = () => {
        if (!this.props.store.addProduct.hasOwnProperty('response')) {
            if (this.props.store.checkProduct.hasOwnProperty('response')) {
                let isSuccess = this.props.store.checkProduct.response.success;
                if (isSuccess) {
                    let productInfo = this.props.store.checkProduct.response.data;
                    confirm(productInfo).then(
                        (product) => {
                            this.props.dispatch(addProduct(product));
                        },
                        () => {
                            //do nothing
                        },
                    );
                }
            }
        } else {
            this.showAddProductAlert()
        }
    };

    showAddProductAlert = () => {
        //here is gonna be a beautiful modal, no simple alert
        alert(this.props.store.addProduct.response.message);
        delete this.props.store.addProduct.response;
        delete this.props.store.checkProduct.response;
        this.setState({
            productURL: '',
        });
    };

    handleChange = (e: any) => {
        this.setState({
            productURL: e.target.value,
        })
    };

    render() {
        this.showConfirmationModal();
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="url" name='productURL' value={this.state.productURL} onChange={this.handleChange}/>
                <input type='submit' value='Add item'/>
            </form>
        )
    }
}

const mapStateToProps = (store: any) => ({store});

export default connect(mapStateToProps)(AddNewProductPage);