import {AppState} from '../../redux/store/storeDataModels/AppState';
import {SortingOptions} from "../../redux/store/storeDataModels/SortingOptions";

export interface DashboardPageProps {
    store: AppState;
    sortingTypeChanged: (sortingType: SortingOptions) => any;
}