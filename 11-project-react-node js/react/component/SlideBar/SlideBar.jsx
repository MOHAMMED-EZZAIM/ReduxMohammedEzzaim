import React from 'react'
import './SlideBar.css'
import { useSelector } from 'react-redux'
function SlideBar() {
  const {name}=useSelector(state=>state.user.userData)
const {email}=useSelector(state=>state.user.userData) 
  return (
    <div className='sliderbar'>
      <ul>
      <li> <a href="#m">Homme</a></li>
      <li> <a href="#m">About</a></li>
      <li> <a href="#m">Contact</a></li>
      <li> <a href="#m">Blog</a></li>
      <li> <a href="#m">Hello {name}</a></li>
      <li> <a href="#m">email:{email}</a></li>
      </ul>
    </div>
  )
}

export default SlideBar
