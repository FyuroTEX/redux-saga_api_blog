import { combineReducers } from 'redux';
import { postReducers } from './reducers/postsReducer';

export const rootReducer = combineReducers({
    posts: postReducers
});