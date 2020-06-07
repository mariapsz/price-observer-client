import {get, post, Response} from 'superagent';
import {ADD_DISCUSSION_POSTS_API_ENDPOINT, GET_DISCUSSION_POSTS_API_ENDPOINT} from '../config';
import {AddDiscussionPostRequest} from "../dataModels/requests/AddDiscussionPostRequest";
import {AuthRequest} from "../dataModels/requests/AuthRequest";

export const getDiscussionPosts = (request: AuthRequest): Promise<Response> => {
    return get(GET_DISCUSSION_POSTS_API_ENDPOINT)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .set('Authorization', `${request.token}`)
        .then(res => res)
        .catch(error => error.response)
};

export const addDiscussionPost = (request: AddDiscussionPostRequest): Promise<Response> => {
    return post(ADD_DISCUSSION_POSTS_API_ENDPOINT)
        .send(JSON.stringify(request.body))
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .set('Authorization', `${request.token}`)
        .then(response => response)
        .catch(error => error.response)
};
