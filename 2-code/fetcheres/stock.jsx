import {configureStore} from '@reduxjs/toolkit'
import utilisaturReducer from './user.jsx'
export const  stock=configureStore({
    reducer:{
       Autreuser:utilisaturReducer,  
    }
})
