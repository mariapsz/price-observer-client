import * as React from 'react';
import {getCookie} from '../../../utils/cookies';
import {COOKIE_NAME_TOKEN, COOKIE_NAME_USER_NAME} from '../../../config';
import {Cell, Frame, Image, IPAdressWrapper, ListHeader, ListRow} from './ProductsTableStyles';
import {DeleteButton} from './DeleteProductButton/deleteProductButton';
import {getProductsListService} from '../../../services/productOperationsService';
import {ProductsListState} from './ProductsListState';
import {Product} from '../../../DataModels/Product';
import {AuthorizationRequest} from '../../../DataModels/requests';
import {SectionTitle} from '../../../Styles/FormStyles';


export default class ProductsList extends React.Component<{}, ProductsListState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            productsListTable: <div></div>,
        };
    }

    componentDidMount() {
        let request: AuthorizationRequest = {
            nickname: getCookie(COOKIE_NAME_USER_NAME),
            JWT: getCookie(COOKIE_NAME_TOKEN),
        };
        getProductsListService(request).then((response) => {
            let productsListTable = this.getProductsListTable(response.productsList);

            this.setState({
                productsListTable,
            })
        })
    }

    // sortByName = () => {
    //     this.setState({
    //         usersList: this.state.usersList.sort((a, b) => (a.nickname > b.nickname) ? 1 : ((b.nickname > a.nickname) ? -1 : 0)),
    //     })
    // };

    getProductsListTable = (productsList: Product[]): JSX.Element => (<div>
            <Frame>
                <SectionTitle>TWOJE PRODUKTY</SectionTitle>
                <ListHeader>
                    <Cell isHeaderCell={true} productProperty='imgSrc'/>
                    <Cell isHeaderCell={true} productProperty='name'>
                        Nazwa produkt
                    </Cell>
                    <Cell isHeaderCell={true} productProperty='currentPrice'>
                        Obecna cena
                    </Cell>
                    <Cell isHeaderCell={true} productProperty='expectedPrice'>
                        Oczekiwana cena
                    </Cell>
                </ListHeader>
                {this.getProductsListRows(productsList)}
            </Frame>
        </div>
    );

    getProductsListRows = (productsList: Product[]): JSX.Element[] =>
        productsList.map((product: Product, i: number) => (
            <ListRow key={i}>
                <Cell productProperty='imgSrc'>
                    <Image src={product.imgSrc}/>
                </Cell>
                <Cell productProperty='name'>
                    {product.name}
                </Cell>
                <Cell productProperty='currentPrice'>
                    {product.currentPrice.count}
                </Cell>
                <Cell productProperty='expectedPrice'>
                    <IPAdressWrapper>
                        {product.expectedPrice!.count}
                    </IPAdressWrapper>
                    <DeleteButton
                        product={product}
                    />
                </Cell>
            </ListRow>
        ));


    render() {
        return <div>
            {this.state.productsListTable}
        </div>
    }
}


