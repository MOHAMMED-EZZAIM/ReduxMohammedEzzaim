import React from 'react'
import {useSelector} from 'react-redux'
function Information() {
    const data=useSelector((state)=>state.Autreuser.value);
  return (
    <div>
      <ul>
        <li>{data.Nom}</li>
        <li>{data.Prenom}</li>
        <li>{data.Email}</li>
      </ul>
    </div>
  )
}

export default Information
