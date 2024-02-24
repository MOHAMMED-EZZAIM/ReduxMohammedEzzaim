import { DECREMENT, INCREMENT, INC_BY_VALUE } from "./types.js"

export const incremenAction = async (dispatch)=>{
return dispatch({type:INCREMENT})
}

export const decrementAction =(dispatch)=>{
   return dispatch({type:DECREMENT})
    }

export const IncrementBy5Action=(dispatch)=>{
   return dispatch({
    type:"IncrementBy5NV"
   })
}

export const IncrementByInput=(dispatch,vl)=>{
  return dispatch({
    type:INC_BY_VALUE,
    value:vl
  })
}