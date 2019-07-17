import * as React from 'react';
import {getCookie} from '../../../utils/cookies';
import {COOKIE_NAME_TOKEN, COOKIE_NAME_USER_NAME} from '../../../config';
import {Cell, Frame, Image, ListHeader, ListRow, TrashIcon} from '../../../Styles/ProductsListStyles';
import {getProductsListService} from '../../../services/productOperationsService';
import {ProductsListState} from './ProductsListState';
import {Product} from '../../../DataModels/Product';
import {AuthorizationRequest} from '../../../DataModels/requests';
import {SectionTitle} from '../../../Styles/CommonStyles';

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
                    <Cell isHeaderCell={true} contentType='imgSrc'/>
                    <Cell isHeaderCell={true} contentType='name'>
                        NAZWA PRODUKTU
                    </Cell>
                    <Cell isHeaderCell={true} contentType='currentPrice'>
                        OBECNA CENA
                    </Cell>
                    <Cell isHeaderCell={true} contentType='expectedPrice'>
                        OCZEKIWANA CENA
                    </Cell>
                    <Cell isHeaderCell={true} contentType='dateOfAdding'>
                        DATA DODANIA
                    </Cell>
                    <Cell isHeaderCell={true} contentType='removeProductButton'/>
                </ListHeader>
                {this.getProductsListRows(productsList)}
            </Frame>
        </div>
    );

    getProductsListRows = (productsList: Product[]): JSX.Element[] =>
        productsList.map((product: Product, i: number) => (
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
            {this.state.productsListTable}
        </div>
    }
}


