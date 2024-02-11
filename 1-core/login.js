import React from 'react'
import {useDispatch} from 'react-redux'
import { desLogin, login } from './fetchers/user.js'
function Login() {
    const dispatch=useDispatch()
  return (
    <div>
      <button
      onClick={()=>dispatch(login({
        email:"m.ezzaim2139@uca.ac.ma",nom:"ezzaim",
        prenom:"mohammed",
        Adress:"marrakech tamnsourte"
      }))}
      >se connecter</button>

      <button
      onClick={()=>dispatch(desLogin())}
      >se desLogin</button>
    </div>
  )
}

export default Login
