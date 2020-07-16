import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './redux/rootReducer';
import thunk from 'redux-thunk';
import { badWordsMiddleware } from './redux/customMiddleware/mdwBadWords';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './redux/rootSaga';

const saga = createSagaMiddleware();

const preloadedState = localStorage.getItem('savedPosts') ? JSON.parse(localStorage.getItem('savedPosts')) : undefined;

const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnchancer = devTools ? devTools : compose;

const middleware = [saga, thunk, badWordsMiddleware];

const store = createStore(rootReducer, preloadedState, composeEnchancer(applyMiddleware(...middleware)));

saga.run(rootSaga);

export { store, saga };

//Write to localStorage
//localStorage.removeItem('myPosts');
store.subscribe(() => {
    const state = store.getState();

    localStorage.setItem('savedPosts', JSON.stringify(state));
})