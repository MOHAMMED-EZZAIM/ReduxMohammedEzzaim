import React from 'react'
import {useSelector} from 'react-redux'
function Profile() {
    const data=useSelector((state)=>state.lina.value)
  return (
    <div>
      <h1>email:{data.email}</h1>
      <h1>nom:{data.nom}</h1>
      <h1>prenom:{data.prenom}</h1>
      <h1>address:{data.Adress}</h1>
      
    </div>
  )
}

export default Profile
