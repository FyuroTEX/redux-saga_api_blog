import { put, call, apply } from 'redux-saga/effects';
import { FETCH_POST } from '../../reducers/types';
import { hideLoader, showAlert } from './../../actions/actions';
import { SHOW_LOADER } from './../../reducers/types';


export function* sagaWorker() {
    try {
        yield put({ type: SHOW_LOADER });
        // or
        // yield put(showLoader());
        //
        // const payload = yield call(fetchPosts);
        // or
        const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/posts?_limit=7')
        const payload = yield apply(response, response.json);
        yield put({ type: FETCH_POST, payload });
        // yield put({type: REQUEST_POSTS, payload});
        // yield put(hideLoader());
    } catch (error) {
        yield put(showAlert(error.message));
        // yield put(hideLoader());
    } finally {
        yield put(hideLoader());
    };
};

// async function fetchPosts() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=7');
//     return await response.json();
// };