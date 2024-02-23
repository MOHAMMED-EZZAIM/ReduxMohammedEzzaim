import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DECREMENT, INCREMENT, INC_BY_VALUE, IncrementBy5, IncrementBy5NV } from '../redux/action/types.js'
import { IncrementBy5Action, IncrementByInput, decrementAction, incremenAction } from '../redux/action/counterActions.js'
function Counter() {
const countstate=useSelector(state=>state.count)
const dispatch=useDispatch();
const [val,setVal]=useState(0)
    const handleIncrement=()=>{
        dispatch(incremenAction());
    }
    const handleDecrement=()=>{
        dispatch(decrementAction());
    }
    const handleDecrementBy5=()=>{
        dispatch({
            type:"IncrementBy5"
        });
    }

    const handleDecrementBy5Nv=()=>{
        dispatch(IncrementBy5Action());
    }
    
    const handeIncrByValue=(vl)=>{
        dispatch(IncrementByInput(vl))
    }

    const inputtest=(e)=>{
        setVal(e.target.value)
    }
  return (
    <div>
     <h1>{countstate}</h1>
     <button onClick={handleIncrement}>Increment</button>
     <button onClick={handleDecrement}>Decrement</button>
     <button onClick={handleDecrementBy5}>DecrementBy5</button>
     <button onClick={handleDecrementBy5Nv}>DecrementBy5Nv</button>


<input type="number" value={val} onChange={inputtest} />
     <button onClick={()=>handeIncrByValue(val)}>handeIncrByValue {val}</button>
    </div>
  )
}

export default Counter
