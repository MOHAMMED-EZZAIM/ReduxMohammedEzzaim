import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { enterValue, suprimervalue } from './fetcheres/user.jsx'
function NvLohin() {
    const [inputVlue1,setInputVlue1]=useState('')
    const [inputVlue2,setInputVlue2]=useState('')
    const [inputVlue3,setInputVlue3]=useState('')
  const dataDeStock=useDispatch((state)=>state.Autreuser.value)
  const handlInput1=(event)=>{
        setInputVlue1(event.target.value);
  }
  const handlInput2=(event)=>{
    setInputVlue2(event.target.value);
}
const handlInput3=(event)=>{
    setInputVlue3(event.target.value);
}
  return (
   
    <div className='Login'>
        <input type="text" value={inputVlue1} onChange={handlInput1}/><br />
        <input type="text" value={inputVlue2} onChange={handlInput2}/><br />
        <input type="text" value={inputVlue3} onChange={handlInput3}/><br />
        
     <button onClick={()=>dataDeStock(enterValue(
        {Nom:inputVlue1,
        Prenom:inputVlue2,
        Email:inputVlue3}
  ))}>Login</button>
  <button onClick={()=>dataDeStock(suprimervalue())}>DisLogin</button>
    </div>
  )
}

export default NvLohin
