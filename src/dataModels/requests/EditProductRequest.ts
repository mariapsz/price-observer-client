import {ProductData} from '../ProductData';
import {AuthRequest} from "./AuthRequest";

export interface EditProductRequest extends AuthRequest  {
    body: ProductData,
}