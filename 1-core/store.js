import {configureStore} from '@reduxjs/toolkit'
import mohammedReducer from './fetchers/user'
export const store=configureStore({
    reducer:{
       lina:mohammedReducer,  
    }
})
