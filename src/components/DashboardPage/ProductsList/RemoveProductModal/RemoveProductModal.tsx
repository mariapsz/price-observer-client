import * as React from 'react';
import {RemoveProductModalProps} from './RemoveProductModalProps';
import {AppState} from '../../../../redux/store/storeDataModels/AppState';
import {connect} from 'react-redux';
import ReactModal from 'react-modal';
import {Wrapper} from '../../../../styles/RemoveProductModal/Wrapper';
import {HeaderLabel, Label} from '../../../../styles/RemoveProductModal/Label';
import {ButtonsWrapper} from '../../../../styles/RemoveProductModal/ButtonsWrapper';
import {Button, SubmitButton} from '../../../../styles/RemoveProductModal/Button';
import {removeProductService} from '../../../../services/productService';
import {RemoveProductRequest} from '../../../../dataModels/requests/RemoveProductRequest';

const RemoveProductModal = (props: RemoveProductModalProps) => {

    const removeProduct = () => {
        const request: RemoveProductRequest = {
            body: props.product,
            token: props.store.login.token!,
        };
        removeProductService(request).then(
            (response: any) => {
                if (response.statusCode === 200) {
                    showServerMessageModal('Produkt został usunięty!');
                    props.handleCloseModal();
                    props.handleCloseEditProductModal();
                    props.handleProductsListChanges();
                } else showServerMessageModal('Wystąpił błąd, prosimy spróbować później');
            })
    };

    const showServerMessageModal = (message: string) => {
        alert(message);
    };

    return <ReactModal
        isOpen={true}
        style={{
            overlay: {},
            content: {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'lightsteelblue',
                right: 'initial',
                bottom: 'initial',
                padding: '5px',
            }
        }}>
        <Wrapper>
            <HeaderLabel>
                Czy na pewno chcesz usunąć ten produkt?
            </HeaderLabel>
            <Label>
                <strong>{props.product.name}</strong> zostanie usunięty z listy Twoich produktów.
            </Label>
            <ButtonsWrapper>
                <Button
                    onClick={props.handleCloseModal}>
                    ANULUJ
                </Button>
                <SubmitButton
                    onClick={() => removeProduct()}>
                    USUŃ PRODUKT
                </SubmitButton>
            </ButtonsWrapper>
        </Wrapper>
    </ReactModal>
};


const mapStateToProps = (store: AppState) => ({store});

export default connect(mapStateToProps)(RemoveProductModal);