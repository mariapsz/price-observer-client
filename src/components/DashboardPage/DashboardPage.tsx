import React, {Component} from 'react';
import ProductsList from './ProductsList/ProductsList';
import NewProduct from './NewProduct/NewProduct';
import DashboardPageWrapper from '../../hoc/PageWrapper/DashboardPageWrapper/DashboardPageWrapper';

export default class DashboardPage extends Component {

    render() {
        return (
            <DashboardPageWrapper>
                <div>
                    <NewProduct/>
                    <ProductsList/>
                </div>
            </DashboardPageWrapper>
        );
    }
};

