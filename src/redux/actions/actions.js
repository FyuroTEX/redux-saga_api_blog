import { CREATE_POST, REQUEST_POSTS, SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT, CLEAR_POST } from './../reducers/types';

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    };
};
export function clearPosts() {
    localStorage.removeItem('myPosts');
    return { type: CLEAR_POST };
};

export function showLoader() {
    return { type: SHOW_LOADER };
};
export function hideLoader() {
    return { type: HIDE_LOADER };
};
export function showAlert(text) {
    return dispatch => {
        dispatch({ type: SHOW_ALERT, payload: text });
        setTimeout(() => {
            dispatch(hideAlert());
        }, 2500);
    };
};

export function hideAlert() {
    return { type: HIDE_ALERT };


};


export function fetchPosts() {
    return {
        type: REQUEST_POSTS
    }
    // return async (dispatch) => {
    //     try {
    //         dispatch(showLoader());
    //         const response = await fetch('https://jsonplaceholder.typicaode.com/posts?_limit=7');
    //         const json = await response.json();
    //         dispatch({ type: FETCH_POST, payload: json });
    //         dispatch(hideLoader())
    //     } catch (error) {
    //         dispatch(showAlert(error.message));
    //         dispatch(hideLoader());
    //     };

    // };
};

