import { applyMiddleware, createStore}  from 'redux';
// import counterReducer from './reducers/Reducer.js';
import { thunk } from 'redux-thunk';


import reducers from './reducers/index.js';
import index from './reducers'
const enhander=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// const store=createStore(reducers,enhander(applyMiddleware(thunk)))
const store=createStore(index,enhander(applyMiddleware(thunk)))

// const store=createStore(reducers,enhander(applyMiddleware()))
export default store