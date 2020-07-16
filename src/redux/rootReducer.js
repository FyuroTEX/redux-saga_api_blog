import { combineReducers } from 'redux';
import { postReducers } from './reducers/postsReducer';
import { appReducer } from './reducers/appReducer';

export const rootReducer = combineReducers({
    posts: postReducers,
    app: appReducer
});