import React from 'react'
import './SlideBar.css'
function SlideBar(props) {
  return (
    <div className='sliderbar'>
      <ul>
      <li> <a href="#m">Homme</a></li>
      <li> <a href="#m">About</a></li>
      <li> <a href="#m">Contact</a></li>
      <li> <a href="#m">Blog</a></li>
      <li> <a href="#m">Hello {props.ischanged &&props.name}</a></li>
      <li> <a href="#m">email:{props.ischanged&& props.email} {props.ischanged  &&props.name}</a></li>
      </ul>
    </div>
  )
}

export default SlideBar
