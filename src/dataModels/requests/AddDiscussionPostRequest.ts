import {DiscussionPost} from "../Post";
import {AuthRequest} from "./AuthRequest";

export interface AddDiscussionPostRequest extends AuthRequest{
    body: { post: DiscussionPost }
}