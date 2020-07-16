import { takeEvery } from 'redux-saga/effects';
import { REQUEST_POSTS } from './../../reducers/types';
import { sagaWorker } from '../worker/sagaWorker';

export function* sagaWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaWorker);
};