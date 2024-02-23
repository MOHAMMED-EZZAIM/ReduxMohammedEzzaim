import { createStore}  from 'redux';
import counterReducer from './reducers/Reducer.js';

const store=createStore(counterReducer)

export default store