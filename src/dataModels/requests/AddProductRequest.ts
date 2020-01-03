import {ProductData} from '../ProductData';
import {AuthRequest} from "./AuthRequest";

export interface AddProductRequest extends AuthRequest {
    body: ProductData,
}