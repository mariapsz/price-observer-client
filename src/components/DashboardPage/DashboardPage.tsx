import React, {Component} from 'react';
import ProductsList from './ProductsList/ProductsList';
import NewProduct from './NewProduct/NewProduct';

export default class DashboardPage extends Component {

    render() {
        return (
            <div>
                <div>
                    <NewProduct/>
                    <ProductsList/>
                </div>
                }
            </div>
        );
    }
};

