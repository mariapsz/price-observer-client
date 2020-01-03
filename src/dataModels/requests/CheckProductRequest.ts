import {AuthRequest} from "./AuthRequest";

export interface CheckProductRequest extends AuthRequest  {
    body: { path: string },
}