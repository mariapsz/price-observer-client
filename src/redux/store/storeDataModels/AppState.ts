import {LoginState} from './LoginState';
import {SortingOptions} from "./SortingOptions";

export interface AppState {
    login: LoginState,
    products: {
        sortedBy: SortingOptions
    },
}