import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import fibReducer from './fib.slicer'; 

const reducers = combineReducers({ fibReducer: fibReducer });

const store = () => {
    return createStore(reducers, composeWithDevTools());
}

export default store();