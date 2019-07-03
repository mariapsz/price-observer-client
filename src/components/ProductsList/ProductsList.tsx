import * as React from 'react';
import {getCookie} from '../../utils/cookies';
import {COOKIE_NAME_TOKEN, COOKIE_NAME_USER_NAME} from '../../config';
import {
    Image,
    IPAdressListCell,
    IPAdressWrapper,
    ListCell,
    ListHeader,
    ListHeaderCell,
    ListRow,
    ListWrapper
} from './UsersListStyles';
import {DeleteButton} from '../DeleteProductButton/deleteProductButton';
import {getProductsListService} from '../../services/productOperationsService';
import {ProductsListState} from './ProductsListState';
import {Product} from '../../DataModels/Product';
import {AuthorizationRequest} from '../../DataModels/AuthorizationRequest';


export class ProductsList extends React.Component<{}, ProductsListState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            productsListTable: <div> </div>,
        };
    }

    componentDidMount() {
        let request: AuthorizationRequest = {
            nickname: getCookie(COOKIE_NAME_USER_NAME),
            JWT: getCookie(COOKIE_NAME_TOKEN),
        };
        getProductsListService(request).then((productsList) => {
            let productsListTable = this.getProductsListTable(productsList);

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
            <ListWrapper>
                <ListHeader>
                    <ListHeaderCell>
                        Photo
                    </ListHeaderCell>
                    <ListHeaderCell>
                        Product name
                    </ListHeaderCell>
                    <ListHeaderCell>
                        Current price
                    </ListHeaderCell>
                    <ListCell>
                        Expected price
                    </ListCell>
                </ListHeader>
                {this.getProductsListRows(productsList)}
            </ListWrapper>
        </div>
    );

    getProductsListRows = (productsList: Product[]): JSX.Element[] =>
        productsList.map((product: Product, i: number) => (
            <ListRow key={i}>
                <ListCell>
                    <Image src={product.imgSrc}/>
                </ListCell>
                <ListCell>
                    {product.name}
                </ListCell>
                <ListCell>
                    {product.currentPrice.count}
                </ListCell>
                <IPAdressListCell>
                    <IPAdressWrapper>
                        {product.expectedPrice.count}
                    </IPAdressWrapper>
                    <DeleteButton
                        product={product}
                    />
                </IPAdressListCell>
            </ListRow>
        ));


    render() {
        return <div>
            {this.state.productsListTable}
        </div>
    }
}


