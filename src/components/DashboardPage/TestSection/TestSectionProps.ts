import {AppState} from '../../../redux/store/storeDataModels/AppState';

export interface TestSectionProps {
    handleProductsListChanges: () => void,
    store: AppState;
}