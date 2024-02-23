import { createStore}  from 'redux';
import counterReducer from './reducers/Reducer.js';
const enhander=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const store=createStore(counterReducer,enhander())

export default store