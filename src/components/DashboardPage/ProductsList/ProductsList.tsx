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


class ProductsList extends React.Component<ProductsListProps> {

    constructor(props: ProductsListProps) {
        super(props);
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
                    productsList: this.props.productsList.sort((a: ProductData, b: ProductData) => (a.expectedPrice!.count > b.expectedPrice!.count) ? 1 : ((b.expectedPrice!.count > a.expectedPrice!.count) ? -1 : 0)),
                });
            else this.setState({
                productsList: this.props.productsList.sort((a: ProductData, b: ProductData) => (a.expectedPrice!.count < b.expectedPrice!.count) ? 1 : ((b.expectedPrice!.count < a.expectedPrice!.count) ? -1 : 0)),
            });
        }
    };

    sortByDateOfAdding = () => {
        if (this.props.productsList.length > 1) {
            if (this.props.productsList[0].dateOfAdding! > this.props.productsList[1].dateOfAdding!)
                this.setState({
                    productsList: this.props.productsList.sort((a: ProductData, b: ProductData) => (a.dateOfAdding! > b.dateOfAdding!) ? 1 : ((b.dateOfAdding! > a.dateOfAdding!) ? -1 : 0)),
                });
            else this.setState({
                productsList: this.props.productsList.sort((a: ProductData, b: ProductData) => (a.dateOfAdding! > b.dateOfAdding!) ? 1 : ((b.dateOfAdding! > a.dateOfAdding!) ? -1 : 0)),
            });
        }
    };

    getProductsListRows = (): JSX.Element[] =>
        this.props.productsList.map((product: ProductData, i: number) => (
            <ListRow key={i}>
                <Cell contentType='imgSrc'>
                    <Image src={product.imgSrc}/>
                </Cell>
                <Cell contentType='name'>
                    {product.name}
                </Cell>
                <Cell contentType='currentPrice'>
                    {product.currentPrice.count} {product.currentPrice.currency}
                </Cell>
                <Cell contentType='expectedPrice'>
                    {product.expectedPrice!.count} {product.expectedPrice!.currency}
                </Cell>
                <Cell contentType='dateOfAdding'>
                    {product.dateOfAdding}
                </Cell>
                <Cell contentType='removeProductButton'>
                    <TrashIcon className="fa fa-trash"/>
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
        </div>
    }
}

const mapStateToProps = (store: AppState) => ({store});

export default connect(mapStateToProps)(ProductsList);


