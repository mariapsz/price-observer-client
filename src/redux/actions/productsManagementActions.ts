import {SortingOptions} from "../store/storeDataModels/SortingOptions";
import * as types from "./index";

export const sortingProductsTypeChanged = (sortProductsBy: SortingOptions) => {
    return {
        type: types.SORTING_PRODUCTS_TYPE_CHANGED,
        sortProductsBy,
    }
};