import React, {Component} from 'react';
import NewProduct from './NewProduct/NewProduct';
import DashboardPageWrapper from '../../hoc/PageWrapper/DashboardPageWrapper/DashboardPageWrapper';
import {DashboardPageState} from './DashboardPageState';
import {GetProductsListRequest} from '../../dataModels/requests/GetProductsListRequest';
import {getProductsListService} from '../../services/productService';
import {AppState} from '../../redux/store/storeDataModels/AppState';
import {connect} from 'react-redux';
import {DashboardPageProps} from './DashboardPageProps';
import {trackPromise} from 'react-promise-tracker';
import ProductsList from './ProductsList/ProductsList';
import {ProductData} from '../../dataModels/ProductData';


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

    sortByName = () => {
        if (this.state.productsList.length > 1) {
            if (this.state.productsList[0].name.localeCompare(this.state.productsList[1].name) === 1) {
                this.setState({
                    productsList: [...this.state.productsList.sort((a: ProductData, b: ProductData) =>
                        (a.name.localeCompare(b.name)))]
                }, () => console.log('0>1', this.state.productsList.map(product => product.name)))
            } else
                this.setState({
                    productsList: [...this.state.productsList.sort((a: ProductData, b: ProductData) =>
                        (b.name.localeCompare(a.name)))]
                }, () => console.log('0<1', this.state.productsList.map(product => product.name)));
        }
    };

    sortByCurrentPrice = () => {
        if (this.state.productsList.length > 1) {
            if (this.state.productsList[0].currentPrice.count > this.state.productsList[1].currentPrice.count)
                this.setState({
                    productsList: [...this.state.productsList.sort((a: ProductData, b: ProductData) =>
                        (a.currentPrice.count > b.currentPrice.count) ? 1 : ((b.currentPrice.count > a.currentPrice.count) ? -1 : 0))]
                });
            else
                this.setState({
                    productsList: [...this.state.productsList.sort((a: ProductData, b: ProductData) =>
                        (a.currentPrice.count < b.currentPrice.count) ? 1 : ((b.currentPrice.count < a.currentPrice.count) ? -1 : 0))]
                });
        }
    };

    sortByExpectedPrice = () => {
        if (this.state.productsList.length > 1) {
            if (this.state.productsList[0].usersDetails![0].expectedPrice.count > this.state.productsList[1].usersDetails![0].expectedPrice.count)
                this.setState({
                    productsList: [...this.state.productsList.sort((a: ProductData, b: ProductData) =>
                        (a.usersDetails![0].expectedPrice!.count > b.usersDetails![0].expectedPrice!.count) ? 1
                            : ((b.usersDetails![0].expectedPrice!.count > a.usersDetails![0].expectedPrice!.count) ? -1 : 0))]
                });
            else
                this.setState({
                    productsList: [...this.state.productsList.sort((a: ProductData, b: ProductData) =>
                        (a.usersDetails![0].expectedPrice.count < b.usersDetails![0].expectedPrice!.count) ? 1
                            : ((b.usersDetails![0].expectedPrice!.count < a.usersDetails![0].expectedPrice!.count) ? -1 : 0))]
                });
        }
    };

    sortByDateOfAdding = () => {
        if (this.state.productsList.length > 1) {
            const firstItem = new Date(this.state.productsList[0].usersDetails![0].addedAt!);
            const secondItem = new Date(this.state.productsList[1].usersDetails![0].addedAt!);
            if ((firstItem.getTime() - secondItem.getTime()) > 0)
                this.setState({
                    productsList: [...this.state.productsList.sort((a: ProductData, b: ProductData) =>
                        (new Date(a.usersDetails![0].addedAt!).getTime() - new Date(b.usersDetails![0].addedAt!).getTime()))]
                });
            else
                this.setState({
                    productsList: [...this.state.productsList.sort((a: ProductData, b: ProductData) =>
                        (new Date(b.usersDetails![0].addedAt!).getTime() - new Date(a.usersDetails![0].addedAt!).getTime()))]
                });
        }
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
                        handleSortByName={this.sortByName}
                        handleSortByCurrentPrice={this.sortByCurrentPrice}
                        handleSortByExpectedPrice={this.sortByExpectedPrice}
                        handleSortByAddedAt={this.sortByDateOfAdding}
                    />
                </div>
            </DashboardPageWrapper>
        );
    }
};


const mapStateToProps = (store: AppState) => ({store});

export default connect(mapStateToProps)(DashboardPage);

