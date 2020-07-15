import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './redux/rootReducer';
import thunk from 'redux-thunk';


const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnchancer = devTools ? devTools : compose;
const middleware = [thunk];

const store = createStore(rootReducer, composeEnchancer(applyMiddleware(...middleware)));

export default store;