import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice.js';
const store=configureStore({
    reducer:{
        counter:counterSlice
    }
})
// const store=createStore(reducers,enhander(applyMiddleware()))
export default store