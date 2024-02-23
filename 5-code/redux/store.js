import { applyMiddleware, createStore}  from 'redux';
import counterReducer from './reducers/Reducer.js';
import reduxThunk from 'redux-thunk'
const enhander=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// const store=createStore(counterReducer,enhander(applyMiddleware(reduxThunk)))

const store=createStore(counterReducer,enhander())
export default store