import {configureStore} from '@reduxjs/toolkit'
import souSotck1Reducer from './user.jsx'
export const  stock=configureStore({
    reducer:{
       Autreuser:souSotck1Reducer,  
    }
})
// App
{ /* <Provider store={stock}>
         <NvLohin/>
        <NvProfile/>
        <Information/>
      </Provider> */}