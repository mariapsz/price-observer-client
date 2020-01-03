import {ProductData} from '../ProductData';
import {AuthRequest} from "./AuthRequest";

export interface RemoveProductRequest extends AuthRequest  {
    body: ProductData,
}