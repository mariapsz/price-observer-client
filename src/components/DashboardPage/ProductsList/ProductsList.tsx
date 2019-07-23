import * as React from 'react';
import {getCookie} from '../../../utils/cookies';
import {COOKIE_NAME_TOKEN, COOKIE_NAME_USER_NAME} from '../../../config';
import {TrashIcon} from '../../../styles/ProductsList/TrashIcon';
import {getProductsListService} from '../../../services/productOperationsService';
import {ProductsListState} from './ProductsListState';
import {Product} from '../../../dataModels/Product';
import {AuthorizationRequest} from '../../../dataModels/requests';
import {SectionTitle} from '../../../styles/Common/SectionTitle';
import {Frame} from '../../../styles/ProductsList/Frame';
import {ListHeader, ListRow} from '../../../styles/ProductsList/ListRow';
import {Cell} from '../../../styles/ProductsList/Cell';
import {Image} from '../../../styles/ProductsList/Image';

export default class ProductsList extends React.Component<{}, ProductsListState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            productsList: new Array(0)
        };
    }

    componentDidMount() {
        let request: AuthorizationRequest = {
            nickname: getCookie(COOKIE_NAME_USER_NAME),
            JWT: getCookie(COOKIE_NAME_TOKEN),
        };
        getProductsListService(request).then((response) => {
            this.setState({
                productsList: response.productsList,
            })
        })
    }

    sortByName = () => {
        if (this.state.productsList.length > 1) {
            if (this.state.productsList[0].name > this.state.productsList[1].name)
                this.setState({
                    productsList: this.state.productsList.sort((a: Product, b: Product) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)),
                });
            else
                this.setState({
                    productsList: this.state.productsList.sort((a: Product, b: Product) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0)),
                });
        }
    };

    sortByCurrentPrice = () => {
        if (this.state.productsList.length > 1) {
            if (this.state.productsList[0].currentPrice.count > this.state.productsList[1].currentPrice.count)
                this.setState({
                    productsList: this.state.productsList.sort((a: Product, b: Product) => (a.currentPrice.count > b.currentPrice.count) ? 1 : ((b.currentPrice.count > a.currentPrice.count) ? -1 : 0)),
                });
            else this.setState({
                productsList: this.state.productsList.sort((a: Product, b: Product) => (a.currentPrice.count < b.currentPrice.count) ? 1 : ((b.currentPrice.count < a.currentPrice.count) ? -1 : 0)),
            })
        }
    };

    sortByExpectedPrice = () => {
        if (this.state.productsList.length > 1) {
            if (this.state.productsList[0].expectedPrice!.count > this.state.productsList[1].expectedPrice!.count)
                this.setState({
                    productsList: this.state.productsList.sort((a: Product, b: Product) => (a.expectedPrice!.count > b.expectedPrice!.count) ? 1 : ((b.expectedPrice!.count > a.expectedPrice!.count) ? -1 : 0)),
                });
            else this.setState({
                productsList: this.state.productsList.sort((a: Product, b: Product) => (a.expectedPrice!.count < b.expectedPrice!.count) ? 1 : ((b.expectedPrice!.count < a.expectedPrice!.count) ? -1 : 0)),
            });
        }
    };

    sortByDateOfAdding = () => {
        if (this.state.productsList.length > 1) {
            if (this.state.productsList[0].dateOfAdding! > this.state.productsList[1].dateOfAdding!)
                this.setState({
                    productsList: this.state.productsList.sort((a: Product, b: Product) => (a.dateOfAdding! > b.dateOfAdding!) ? 1 : ((b.dateOfAdding! > a.dateOfAdding!) ? -1 : 0)),
                });
            else this.setState({
                productsList: this.state.productsList.sort((a: Product, b: Product) => (a.dateOfAdding! > b.dateOfAdding!) ? 1 : ((b.dateOfAdding! > a.dateOfAdding!) ? -1 : 0)),
            });
        }
    };

    getProductsListRows = (): JSX.Element[] =>
        this.state.productsList.map((product: Product, i: number) => (
            <ListRow key={i}>
                <Cell contentType='imgSrc'>
                    <Image src={product.imgSrc}/>
                </Cell>
                <Cell contentType='name'>
                    {product.name}
                </Cell>
                <Cell contentType='currentPrice'>
                    {product.currentPrice.count}
                </Cell>
                <Cell contentType='expectedPrice'>
                    {product.expectedPrice!.count}
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
                {this.getProductsListRows()}
            </Frame>
        </div>
    }
}


