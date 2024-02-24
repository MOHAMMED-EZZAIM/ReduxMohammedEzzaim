import React from 'react'
import './Form.css'
function Form(props) {
  return (

  <form onSubmit={props.addUser}>
    <div className='form-group'>
      <input type="text"  placeholder='Enter Name'
      onChange={(e)=>props.setName(e.target.value)}/>
    </div>
    <div className='form-group'>
      <input type="email"  placeholder='Enter Email'
      onChange={(e)=>props.setEmail(e.target.value)}/>
    </div>
    <div className='form-group'>
      <input type="submit"  placeholder='Add User'/>
    </div>
  </form>
  )
}

export default Form
