import React, { useState } from 'react';
import './Form.css';
import { useDispatch } from 'react-redux';
import { addUser, succesUser } from '../../redux/userSlice.js';

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    //pour envoyer a packend
    dispatch(addUser({name,email}))
    //pour stocker les informatuon dans state
    dispatch(succesUser({name,email}))
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <input type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
      </div>
      <div className='form-group'>
        <input type="email" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className='form-group'>
        <input type="submit" value='Add User' />
      </div>
    </form>
  );
}

export default Form;