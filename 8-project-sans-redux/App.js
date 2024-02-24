
import { useState } from 'react';
import './App.css';
import Form from './component/Form/Form.jsx';
import Header from './component/Header/Header.jsx';
import SlideBar from './component/SlideBar/SlideBar.jsx';
function App() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [ischanged,setIschanged] =useState(false)

  const addUser=(e)=>{
    e.preventDefault();
    setIschanged(true)
  }
  return (
    <div className='App'>
  <Header name={name} ischanged={ischanged}/>
  <div className='main'>
  <SlideBar name={name} email={email} ischanged={ischanged}/>
  <Form setName={setName} setEmail={setEmail} addUser={addUser}/>
  </div>
  
    </div>
   

   
  );
}

export default App;
