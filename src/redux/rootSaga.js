import { sagaWatcher } from "./sagas/watcher/sagasWatcher";

export function* rootSaga() {
    yield sagaWatcher();
};