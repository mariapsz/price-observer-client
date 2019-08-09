import {AppState} from '../../redux/store/storeDataModels/AppState';
import {LoginRequest} from '../../dataModels/requests/LoginRequest';

export interface LoginPageProps {
    store: AppState,
    logIn: (requestBody: LoginRequest) => any,
    notifyErrorMessageRead: () => any,
}