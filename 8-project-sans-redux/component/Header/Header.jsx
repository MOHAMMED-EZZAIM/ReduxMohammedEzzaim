import React from 'react'
import './Header.css'
function Header(props) {
  return (
    <div className='Header'>
     <h1>Coderz Academy</h1>
     <p>Hello {props.ischanged &&
     props.name}</p>
    </div>
  )
}

export default Header
