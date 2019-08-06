import * as React from 'react';
import {useState} from 'react';
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
import EditProductModal from './EditProductModal/EditProductModal';
import RemoveProductModal from './RemoveProductModal/RemoveProductModal';
import {EmptyListInfo} from '../../../styles/ProductsList/EmptyListInfo';
import {EmptyListInfoWrapper} from '../../../styles/ProductsList/EmptyListInfoWrapper';
import {usePromiseTracker} from 'react-promise-tracker';

const ProductsList = (props: ProductsListProps) => {

    const [showEditProductModal, setShowEditProductModal] = useState<boolean>(false);
    const [showRemoveProductModal, setShowRemoveProductModal] = useState<boolean>(false);
    const [productToEdit, setProductToEdit] = useState<ProductData | undefined>(undefined);
    const [productToRemove, setProductToRemove] = useState<ProductData | undefined>(undefined);

    const handleShowEditProductModal = (product: ProductData) => {
        setShowEditProductModal(true);
        setProductToEdit(product);
    };

    const handleCloseEditProductModal = () => {
        setShowEditProductModal(false);
        setProductToEdit(undefined);
    };

    const handleShowRemoveProductModal = (product: ProductData) => {
        setShowRemoveProductModal(true);
        setProductToRemove(product);
    };

    const handleCloseRemoveProductModal = () => {
        setShowRemoveProductModal(false);
        setProductToRemove(undefined);
    };

    const parseDate = (dateToParse: string): string => {
        const date = new Date(dateToParse);
        return date.toLocaleString();
    };

    const {promiseInProgress} = usePromiseTracker({area: 'productsListArea'});

    const getProductsListRows = (): JSX.Element[] | JSX.Element => {
        console.log('hello from getProductsListRows');
        if (props.productsList.length < 1 && !promiseInProgress)
            return <EmptyListInfoWrapper>
                <EmptyListInfo>Lista Twoich produktów jest pusta</EmptyListInfo>
            </EmptyListInfoWrapper>;
        else
            return props.productsList.map((product: ProductData, i: number) => (
                <ListRow
                    key={i}>
                    <Cell
                        contentType='imgSrc'
                        onClick={() => handleShowEditProductModal(product)}>
                        <Image src={product.imgSrc}/>
                    </Cell>
                    <Cell
                        contentType='name'
                        onClick={() => handleShowEditProductModal(product)}>
                        {product.name}
                    </Cell>
                    <Cell
                        contentType='currentPrice'
                        onClick={() => handleShowEditProductModal(product)}>
                        {product.currentPrice.count} {product.currentPrice.currency}
                    </Cell>
                    <Cell
                        contentType='expectedPrice'
                        onClick={() => handleShowEditProductModal(product)}>
                        {product.usersDetails![0].expectedPrice.count} {product.usersDetails![0].expectedPrice.currency}
                    </Cell>
                    <Cell
                        contentType='dateOfAdding'
                        onClick={() => handleShowEditProductModal(product)}>
                        {parseDate(product.usersDetails![0].addedAt!)}
                    </Cell>
                    <Cell
                        contentType='removeProductButton'>
                        <TrashIcon
                            className="fa fa-trash"
                            onClick={() => handleShowRemoveProductModal(product)}/>
                    </Cell>
                </ListRow>
            ))
    };

    return <div>
        <Frame>
            <SectionTitle>TWOJE PRODUKTY</SectionTitle>
            <ListHeader>
                <Cell
                    isHeaderCell={true}
                    contentType='imgSrc'/>
                <Cell
                    isHeaderCell={true}
                    contentType='name'
                    onClick={props.handleSortByName}>
                    NAZWA PRODUKTU
                </Cell>
                <Cell
                    isHeaderCell={true}
                    contentType='currentPrice'
                    onClick={props.handleSortByCurrentPrice}>
                    OBECNA CENA
                </Cell>
                <Cell
                    isHeaderCell={true}
                    contentType='expectedPrice'
                    onClick={props.handleSortByExpectedPrice}>
                    OCZEKIWANA CENA
                </Cell>
                <Cell
                    isHeaderCell={true}
                    contentType='dateOfAdding'
                    onClick={props.handleSortByAddedAt}>
                    DATA DODANIA
                </Cell>
                <Cell
                    isHeaderCell={true}
                    contentType='removeProductButton'/>
            </ListHeader>
            <ProductsListLoader
                area={'productsListArea'}
            />
            {getProductsListRows()}
        </Frame>
        {showEditProductModal
        &&
        <EditProductModal
            showModal={showEditProductModal}
            product={productToEdit!}
            handleCloseModal={handleCloseEditProductModal}
            handleProductsListChanges={props.handleProductsListChanges}
            handleShowRemoveProductModal={handleShowRemoveProductModal}/>}
        {showRemoveProductModal
        &&
        <RemoveProductModal
            showModal={showRemoveProductModal}
            product={productToRemove!}
            handleCloseModal={handleCloseRemoveProductModal}
            handleProductsListChanges={props.handleProductsListChanges}
            handleCloseEditProductModal={handleCloseEditProductModal}/>}
    </div>
};

const mapStateToProps = (store: AppState) => ({store});

export default connect(mapStateToProps)(ProductsList);


