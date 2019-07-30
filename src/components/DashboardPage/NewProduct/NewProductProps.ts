import {AppState} from '../../../redux/store/storeDataModels/AppState';

export interface NewProductProps {
    handleNewProductAdding: () => void,
    store: AppState,
}