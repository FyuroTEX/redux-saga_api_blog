import { put, call } from 'redux-saga/effects';
import { FETCH_POST } from '../../reducers/types';
import { showLoader, hideLoader, showAlert } from './../../actions/actions';




export function* sagaWorker() {
    try {
        yield put(showLoader());
        const payload = yield call(fetchPosts);
        yield put({ type: FETCH_POST, payload });
        // yield put({type: REQUEST_POSTS, payload});
        yield put(hideLoader());
    } catch (error) {
        yield put(showAlert(error.message));
        yield put(hideLoader());
    };
};

async function fetchPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=7');
    return await response.json();
};