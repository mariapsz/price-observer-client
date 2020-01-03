import {XssProtectedChangedActionPayload} from "../../../redux/actions/xssProtectedChangedActionPayload";
import {AppState} from "../../../redux/store/storeDataModels/AppState";

export interface ToggleXSSProtectedProps {
    handleXSSProtectedChanged: (payload: XssProtectedChangedActionPayload) => any,
    store: AppState,
}