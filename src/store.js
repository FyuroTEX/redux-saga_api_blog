import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './redux/rootReducer';
import thunk from 'redux-thunk';
import { badWordsMiddleware } from './redux/customMiddleware/mdwBadWords';

const preloadedState = localStorage.getItem('myPosts') ? JSON.parse(localStorage.getItem('myPosts')) : undefined;
const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnchancer = devTools ? devTools : compose;
const middleware = [thunk, badWordsMiddleware];

export const store = createStore(rootReducer, preloadedState, composeEnchancer(applyMiddleware(...middleware)));


//Write to localStorage
//localStorage.removeItem('myPosts');
store.subscribe(() => {
    const state = store.getState();

    localStorage.setItem('myPosts', JSON.stringify(state));
})