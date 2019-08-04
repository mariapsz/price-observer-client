import * as React from 'react';
import {TrashIcon} from '../../../styles/ProductsList/TrashIcon';
import {ProductData} from '../../../dataModels/ProductData';
import {SectionTitle} from '../../../styles/Common/SectionTitle';
import {Frame} from '../../../styles/ProductsList/Frame';
import {ListHeader, ListRow} from '../../../styles/ProductsList/ListRow';
import {Cell} from '../../../styles/ProductsList/Cell';
import {Image} from '../../../styles/ProductsList/Image';
import {AppState} from '../../../redux/store/storeDataModels/AppState';
import {connect} from 'react-redux';
import {ProductsListProps} from './ProductsListProps';
import ProductsListLoader from '../../Loader/ProductsListLoader';
import {ProductsListState} from './ProductsListState';
import EditProductModal from './EditProductModal/EditProductModal';
import RemoveProductModal from './RemoveProductModal/RemoveProductModal';


class ProductsList extends React.Component<ProductsListProps, ProductsListState> {

    constructor(props: ProductsListProps) {
        super(props);

        this.state = {
            showEditProductModal: false,
            showRemoveProductModal: false,
            productsList: this.props.productsList,
            productToEdit: undefined,
            productToRemove: undefined,
        }
    }

    sortByName = () => {
        if (this.props.productsList.length > 1) {
            if (this.props.productsList[0].name > this.props.productsList[1].name)
                this.setState({
                    productsList: this.props.productsList.sort((a: ProductData, b: ProductData) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)),
                });
            else
                this.setState({
                    productsList: this.props.productsList.sort((a: ProductData, b: ProductData) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0)),
                });
        }
    };

    sortByCurrentPrice = () => {
        if (this.props.productsList.length > 1) {
            if (this.props.productsList[0].currentPrice.count > this.props.productsList[1].currentPrice.count)
                this.setState({
                    productsList: this.props.productsList.sort((a: ProductData, b: ProductData) => (a.currentPrice.count > b.currentPrice.count) ? 1 : ((b.currentPrice.count > a.currentPrice.count) ? -1 : 0)),
                });
            else this.setState({
                productsList: this.props.productsList.sort((a: ProductData, b: ProductData) => (a.currentPrice.count < b.currentPrice.count) ? 1 : ((b.currentPrice.count < a.currentPrice.count) ? -1 : 0)),
            })
        }
    };

    sortByExpectedPrice = () => {
        if (this.props.productsList.length > 1) {
            if (this.props.productsList[0].expectedPrice!.count > this.props.productsList[1].expectedPrice!.count)
                this.setState({
                    productsList: this.props.productsList.sort((a: ProductData, b: ProductData) => (a.usersDetails![0].expectedPrice!.count > b.usersDetails![0].expectedPrice!.count) ? 1 : ((b.usersDetails![0].expectedPrice!.count > a.usersDetails![0].expectedPrice!.count) ? -1 : 0)),
                });
            else this.setState({
                productsList: this.props.productsList.sort((a: ProductData, b: ProductData) => (a.usersDetails![0].expectedPrice.count < b.usersDetails![0].expectedPrice!.count) ? 1 : ((b.usersDetails![0].expectedPrice!.count < a.usersDetails![0].expectedPrice!.count) ? -1 : 0)),
            });
        }
    };

    sortByDateOfAdding = () => {
        if (this.props.productsList.length > 1) {
            if (this.props.productsList[0].dateOfAdding! > this.props.productsList[1].dateOfAdding!)
                this.setState({
                    productsList: this.props.productsList.sort((a: ProductData, b: ProductData) => (a.usersDetails![0].expectedPrice! > b.usersDetails![0].expectedPrice!) ? 1 : ((b.usersDetails![0].expectedPrice! > a.usersDetails![0].expectedPrice!) ? -1 : 0)),
                });
            else this.setState({
                productsList: this.props.productsList.sort((a: ProductData, b: ProductData) => (a.usersDetails![0].expectedPrice! > b.usersDetails![0].expectedPrice!) ? 1 : ((b.usersDetails![0].expectedPrice! > a.usersDetails![0].expectedPrice!) ? -1 : 0)),
            });
        }
    };

    showEditProductModal = (product: ProductData) => {
        this.setState({
            showEditProductModal: true,
            productToEdit: product,
        })
    };

    handleCloseEditProductModal = () => {
        this.setState({
            showEditProductModal: false,
            productToEdit: undefined,
        })
    };

    showRemoveProductModal = (product: ProductData) => {
        this.setState({
            showRemoveProductModal: true,
            productToRemove: product,
        })
    };

    handleCloseRemoveProductModal = () => {
        this.setState({
            showRemoveProductModal: false,
            productToRemove: undefined,
        })
    };

    getProductsListRows = (): JSX.Element[] =>
        this.props.productsList.map((product: ProductData, i: number) => (
            <ListRow key={i}>
                <Cell
                    contentType='imgSrc'
                    onClick={() => this.showEditProductModal(product)}
                >
                    <Image src={product.imgSrc}/>
                </Cell>
                <Cell
                    contentType='name'
                    onClick={() => this.showEditProductModal(product)}
                >
                    {product.name}
                </Cell>
                <Cell
                    contentType='currentPrice'
                    onClick={() => this.showEditProductModal(product)}
                >
                    {product.currentPrice.count} {product.currentPrice.currency}
                </Cell>
                <Cell
                    contentType='expectedPrice'
                    onClick={() => this.showEditProductModal(product)}
                >
                    {product.usersDetails![0].expectedPrice.count} {product.usersDetails![0].expectedPrice.currency}
                </Cell>
                <Cell
                    contentType='dateOfAdding'
                    onClick={() => this.showEditProductModal(product)}
                >
                    {product.usersDetails![0].addedAt}
                </Cell>
                <Cell contentType='removeProductButton'>
                    <TrashIcon
                        className="fa fa-trash"
                        onClick={() => this.showRemoveProductModal(product)}
                    />
                </Cell>
            </ListRow>
        ));

    render() {
        return <div>
            <Frame>
                <SectionTitle>TWOJE PRODUKTY</SectionTitle>
                <ListHeader>
                    <Cell isHeaderCell={true} contentType='imgSrc'/>
                    <Cell isHeaderCell={true} contentType='name' onClick={this.sortByName}>
                        NAZWA PRODUKTU
                    </Cell>
                    <Cell isHeaderCell={true} contentType='currentPrice' onClick={this.sortByCurrentPrice}>
                        OBECNA CENA
                    </Cell>
                    <Cell isHeaderCell={true} contentType='expectedPrice' onClick={this.sortByExpectedPrice}>
                        OCZEKIWANA CENA
                    </Cell>
                    <Cell isHeaderCell={true} contentType='dateOfAdding' onClick={this.sortByDateOfAdding}>
                        DATA DODANIA
                    </Cell>
                    <Cell isHeaderCell={true} contentType='removeProductButton'/>
                </ListHeader>
                <ProductsListLoader
                    area={'productsListArea'}
                />
                {this.getProductsListRows()}
            </Frame>
            {this.state.showEditProductModal && <EditProductModal
                showModal={this.state.showEditProductModal}
                product={this.state.productToEdit!}
                handleCloseModal={this.handleCloseEditProductModal}
                handleProductsListChanges={this.props.handleProductsListChanges}
            />}
            {this.state.showRemoveProductModal && <RemoveProductModal
                showModal={this.state.showRemoveProductModal}
                product={this.state.productToRemove!}
                handleCloseModal={this.handleCloseRemoveProductModal}
                handleProductsListChanges={this.props.handleProductsListChanges}
            />}
        </div>
    }
}

const mapStateToProps = (store: AppState) => ({store});

export default connect(mapStateToProps)(ProductsList);


