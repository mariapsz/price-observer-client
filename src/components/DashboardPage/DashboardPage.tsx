import React, {Component} from 'react';
import ProductsList from './ProductsList/ProductsList';
import NewProduct from './NewProduct/NewProduct';
import DashboardPageWrapper from '../../hoc/PageWrapper/DashboardPageWrapper/DashboardPageWrapper';

export default class DashboardPage extends Component {

    constructor(props: {}){
        super(props);

        this.state = {
            newProductAdded: false,
        }
    }

    handleNewProductAdding = () => {
        this.setState({
            newProductAdded: true,
        })
    };

    render() {
        return (
            <DashboardPageWrapper>
                <div>
                    <NewProduct
                        handleNewProductAdding={this.handleNewProductAdding}
                    />
                    <ProductsList/>
                </div>
            </DashboardPageWrapper>
        );
    }
};

