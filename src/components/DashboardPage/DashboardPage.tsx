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
import TestSection from './TestSection/TestSection';
import {sortingProductsTypeChanged} from "../../redux/actions/productsManagementActions";
import {Dispatch} from "redux";
import {SortingOptions} from "../../redux/store/storeDataModels/SortingOptions";


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
            getProductsListService(request), 'productsListArea')
            .then((response: any) => {
                if (response.statusCode === 200) {
                    this.setState({
                        productsList: response.body.products,
                    }, () => {
                        switch (this.props.store.products.sortedBy) {
                            case SortingOptions.NameAsc:
                                this.sortByNameAsc();
                                break;
                            case SortingOptions.NameDesc:
                                this.sortByNameDesc();
                                break;
                            case SortingOptions.CurrentPriceAsc:
                                this.sortByCurrentPriceAsc();
                                break;
                            case SortingOptions.CurrentPriceDesc:
                                this.sortByCurrentPriceDesc();
                                break;
                            case SortingOptions.ExpectedPriceAsc:
                                this.sortByExpectedPriceAsc();
                                break;
                            case SortingOptions.ExpectedPriceDesc:
                                this.sortByExpectedPriceDesc();
                                break;
                            case SortingOptions.AddingDateAsc:
                                this.sortByDateOfAddingAsc();
                                break;
                            case SortingOptions.AddingDateDesc:
                                this.sortByDateOdAddingDesc();
                                break;
                        }
                    })
                }
            });
    };

    sortByNameAsc = () => {
        this.setState({
            productsList: [...this.state.productsList.sort((a: ProductData, b: ProductData) =>
                (a.name.localeCompare(b.name)))]
        });
        this.props.sortingTypeChanged(SortingOptions.NameAsc);
    };

    sortByNameDesc = () => {
        this.setState({
            productsList: [...this.state.productsList.sort((a: ProductData, b: ProductData) =>
                (b.name.localeCompare(a.name)))]
        });
        this.props.sortingTypeChanged(SortingOptions.NameDesc);
    };

    sortByDateOfAddingAsc = () => {
        this.setState({
            productsList: [...this.state.productsList.sort((a: ProductData, b: ProductData) =>
                (new Date(a.usersDetails![0].addedAt!).getTime() - new Date(b.usersDetails![0].addedAt!).getTime()))]
        });
        this.props.sortingTypeChanged(SortingOptions.AddingDateAsc);
    };

    sortByDateOdAddingDesc = () => {
        this.setState({
            productsList: [...this.state.productsList.sort((a: ProductData, b: ProductData) =>
                (new Date(b.usersDetails![0].addedAt!).getTime() - new Date(a.usersDetails![0].addedAt!).getTime()))]
        });
        this.props.sortingTypeChanged(SortingOptions.AddingDateDesc);
    };

    sortByCurrentPriceAsc = () => {
        this.setState({
            productsList: [...this.state.productsList.sort((a: ProductData, b: ProductData) =>
                (a.currentPrice.count > b.currentPrice.count) ? 1 : ((b.currentPrice.count > a.currentPrice.count) ? -1 : 0))]
        });
        this.props.sortingTypeChanged(SortingOptions.CurrentPriceAsc);
    };

    sortByCurrentPriceDesc = () => {
        this.setState({
            productsList: [...this.state.productsList.sort((a: ProductData, b: ProductData) =>
                (a.currentPrice.count < b.currentPrice.count) ? 1 : ((b.currentPrice.count < a.currentPrice.count) ? -1 : 0))]
        });
        this.props.sortingTypeChanged(SortingOptions.CurrentPriceDesc);
    };

    sortByExpectedPriceAsc = () => {
        console.log('sortByExpectedPriceAsc');
        this.setState({
            productsList: [...this.state.productsList.sort((a: ProductData, b: ProductData) =>
                (a.usersDetails![0].expectedPrice!.count > b.usersDetails![0].expectedPrice!.count) ? 1
                    : ((b.usersDetails![0].expectedPrice!.count > a.usersDetails![0].expectedPrice!.count) ? -1 : 0))]
        });
        this.props.sortingTypeChanged(SortingOptions.ExpectedPriceAsc);
    };

    sortByExpectedPriceDesc = () => {
        console.log('sortByExpectedPriceDesc');
        this.setState({
            productsList: [...this.state.productsList.sort((a: ProductData, b: ProductData) =>
                (parseFloat(a.usersDetails![0].expectedPrice.count) < parseFloat(b.usersDetails![0].expectedPrice!.count)) ? 1
                    : ((parseFloat(b.usersDetails![0].expectedPrice!.count) < parseFloat(a.usersDetails![0].expectedPrice!.count)) ? -1 : 0))]
        });
        this.props.sortingTypeChanged(SortingOptions.ExpectedPriceDesc);
    };

    handleSortByName = () => {
        if (this.state.productsList.length > 1) {
            if (this.state.productsList[0].name.localeCompare(this.state.productsList[1].name) === 1) {
                this.sortByNameAsc();
            } else {
                this.sortByNameDesc();
            }
        }
    };

    handleSortByCurrentPrice = () => {
        if (this.state.productsList.length > 1) {
            if (this.state.productsList[0].currentPrice.count > this.state.productsList[1].currentPrice.count)
                this.sortByCurrentPriceAsc();
            else
                this.sortByCurrentPriceDesc();
        }
    };

    handleSortByExpectedPrice = () => {
        if (this.state.productsList.length > 1) {
            if (this.state.productsList[0].usersDetails![0].expectedPrice.count > this.state.productsList[1].usersDetails![0].expectedPrice.count)
                this.sortByExpectedPriceAsc();
            else
                this.sortByExpectedPriceDesc();
        }
    };

    handleSortByDateOfAdding = () => {
        if (this.state.productsList.length > 1) {
            const firstItem = new Date(this.state.productsList[0].usersDetails![0].addedAt!);
            const secondItem = new Date(this.state.productsList[1].usersDetails![0].addedAt!);
            if ((firstItem.getTime() - secondItem.getTime()) > 0)
                this.sortByDateOfAddingAsc();
            else
                this.sortByDateOdAddingDesc();
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
                        handleSortByName={this.handleSortByName}
                        handleSortByCurrentPrice={this.handleSortByCurrentPrice}
                        handleSortByExpectedPrice={this.handleSortByExpectedPrice}
                        handleSortByAddedAt={this.handleSortByDateOfAdding}
                    />
                    <TestSection
                        handleProductsListChanges={this.handleProductsListChanges}
                    />
                </div>
            </DashboardPageWrapper>
        );
    }
};


const mapStateToProps = (store: AppState) => ({store});

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        sortingTypeChanged: (sortingType: SortingOptions): any => dispatch(sortingProductsTypeChanged(sortingType)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);

