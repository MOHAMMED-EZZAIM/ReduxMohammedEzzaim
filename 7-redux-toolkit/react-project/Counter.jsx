import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmout } from '../redux/counterSlice.js'
function Counter() {
//{count} hader mohima 
const {count}=useSelector(state=>state.counter)
const dispatch=useDispatch();
const [val,setVal]=useState(0)
    const handleIncrement=()=>{
     //   incremenAction(dispatch);
     dispatch(increment())
    }
    const handleDecrement=()=>{
        // decrementAction(dispatch);
        dispatch(decrement())
    }

    // const handeIncrByValue=(vl)=>{
    // dispatch(incrementByAmout(vl))
    // }

    const handeIncrByValue=(vl)=>{
        dispatch(incrementByAmout({payload:vl}))
        }
    

    const inputtest=(e)=>{
        setVal(e.target.value)
    }
    
  return (
    <div>
     <h1>{count}</h1>
     <button onClick={handleIncrement}>Increment</button>
     <button onClick={handleDecrement}>Decrement</button>
<input type="number" value={val} onChange={inputtest} />
     <button onClick={()=>handeIncrByValue(val)}>handeIncrByValue {val}</button>
    </div>
  )
}

export default Counter
