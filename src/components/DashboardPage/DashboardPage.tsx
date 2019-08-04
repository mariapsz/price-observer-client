import React, {Component} from 'react';
import ProductsList from './ProductsList/ProductsList';
import NewProduct from './NewProduct/NewProduct';
import DashboardPageWrapper from '../../hoc/PageWrapper/DashboardPageWrapper/DashboardPageWrapper';
import {DashboardPageState} from './DashboardPageState';
import {GetProductsListRequest} from '../../dataModels/requests/GetProductsListRequest';
import {getProductsListService} from '../../services/productService';
import {AppState} from '../../redux/store/storeDataModels/AppState';
import {connect} from 'react-redux';
import {DashboardPageProps} from './DashboardPageProps';
import {trackPromise} from 'react-promise-tracker';


class DashboardPage extends Component<DashboardPageProps, DashboardPageState> {

    constructor(props: DashboardPageProps) {
        super(props);

        this.state = {
            productsList: new Array(),
        }
    }

    handleProductsListChanges = (): void => {
        this.updateProductsList();
    };

    componentDidMount() {
        this.updateProductsList();
    }

    updateProductsList = () => {
        let request: GetProductsListRequest = {
            token: this.props.store.login.token!,
        };
        trackPromise(
            getProductsListService(request).then((response: any) => {
                if (response.statusCode === 200) {
                    this.setState({
                        productsList: response.body.products,
                    })
                }
            }), 'productsListArea');
    };

    render() {
        return (
            <DashboardPageWrapper>
                <div>
                    <NewProduct
                        handleNewProductAdding={this.handleProductsListChanges}
                    />
                    <ProductsList
                        productsList={this.state.productsList}
                        handleProductsListChanges={this.handleProductsListChanges}
                    />
                </div>
            </DashboardPageWrapper>
        );
    }
};


const mapStateToProps = (store: AppState) => ({store});

export default connect(mapStateToProps)(DashboardPage);

