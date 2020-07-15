import { CREATE_POST, FETCH_POST } from './../reducers/types';

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    };
};
export function fetchPosts() {
    return async (dispatch) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=15');
        const json = await response.json();
        dispatch({ type: FETCH_POST, payload: json });
    }
}