import { takeEvery, all, call } from 'redux-saga/effects';
import { REQUEST_POSTS } from './../../reducers/types';
import { sagaWorker } from '../worker/sagaWorker';

function* sagaWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaWorker);
};

export function* watchPosts() {
    yield all([call(sagaWatcher)]);
    // yield all([call(sagaWatcher), call(sagaWatcher)]);
};