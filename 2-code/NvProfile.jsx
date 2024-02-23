import React from 'react'
import {useSelector} from 'react-redux'
import '../../App.css';
function NvProfile() {
    const data=useSelector((state)=>state.Autreuser.value);
  return (
    <div className='Login2'>
      <h1>Name:  {data.Nom}</h1>
      <h1>Prenom: {data.Prenom}</h1>
      <h1>Email: { data.Email}</h1>
    </div>
  )
}

export default NvProfile

// .Login{
//   background-color: blue;
  
//   align-items: center;
//   text-align: center;
//   margin-top: 100px;
//   height: 400px;
//   width: 400px;
// }
// input{
//   width: 90%;
//   margin-bottom: 40px;
//   margin-top: 20px;
//   height: 40px;
//   color: #61dafb;
//   font-weight: bold;
//   font-size: 2rem;
// }
// .Login2{
//   background-color: rgb(246, 250, 10);
//   text-align: center;
//   margin-top: 100px;
//   height: 400px;
//   width: 400px;
//   padding:40px
// }
// button{
//   background-color: white;
//   color: black;
//   font-weight: bold;
//   font-size: 2rem;
//   margin-right: 20px;
//   border: none;
//   width: 150px;
//   height:40px;
// }
// button:hover{
//   background-color: aqua;
// }
// button:active{
//   background-color: black;
//   color: white;
//   box-shadow: 2px 2px 2px 2px rgb(9, 214, 237);
// }