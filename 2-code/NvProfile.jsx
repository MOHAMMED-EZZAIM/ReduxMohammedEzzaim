import React from 'react'
import {useSelector} from 'react-redux'
function NvProfile() {
    const data=useSelector((state)=>state.Autreuser.value);
  return (
    <div>
      <h1>Name:  {data.Nom}</h1>
      <h1>Prenom: {data.Prenom}</h1>
      <h1>Email: { data.Email}</h1>
    </div>
  )
}

export default NvProfile
