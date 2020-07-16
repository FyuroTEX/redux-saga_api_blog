import { watchPosts } from "./sagas/watcher/sagasWatcher";
import { all, call } from 'redux-saga/effects';

export function* rootSaga() {
    yield all([call(watchPosts)]);
};