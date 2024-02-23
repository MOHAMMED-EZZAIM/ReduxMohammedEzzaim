import { DECREMENT, INCREMENT, INC_BY_VALUE } from "./types.js"

export const incremenAction =()=>{
return {
    type:INCREMENT
}
}

export const decrementAction =()=>{
    return {
        type:DECREMENT
    }
    }

export const IncrementBy5Action=()=>{
    return {
        type:"IncrementBy5NV"
    }
}

export const IncrementByInput=(vl)=>{
    return{
        type:INC_BY_VALUE,
        value:vl
    }
}