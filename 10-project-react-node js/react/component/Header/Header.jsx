import React from 'react'
import './Header.css'
import { useSelector } from 'react-redux'
function Header() {
const {name}=useSelector(state=>state.user.userData)
const {email}=useSelector(state=>state.user.userData) 
  return (
    <div className='Header'>
     <h1>Coderz Academy</h1>
     <p>Hello {name}</p>
     <p>{email}</p>
    </div>
    
  )
}

export default Header
