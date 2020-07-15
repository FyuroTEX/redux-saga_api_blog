import { CREATE_POST } from './../reducers/types';

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    };
};