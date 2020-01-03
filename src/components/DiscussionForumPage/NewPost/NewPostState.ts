import {DiscussionPost} from "../../../dataModels/Post";

export interface NewPostState {
    post: DiscussionPost,
    submitButtonDisabled: boolean,
}