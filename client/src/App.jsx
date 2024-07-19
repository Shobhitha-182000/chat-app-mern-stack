import { useState } from 'react'
 
  
import ChatContainer from './components/ChatContainer';
import { ChatBoxReciever, ChatBoxSender } from './components/ChatBox';
 
import Login from './components/Login';
import './App.css';
 

function App() {
 

  return (
    <div className='main-container' >
      {/* <ChatBoxReciever userName={"Raj"} message={"hi this is "} avatar={image}/>
      <ChatBoxSender userName={"Rani"} message={"hello"} avatar={image}/> 
      <ChatContainer/>
       <InputText/> */}

       <ChatContainer/>
    </div>
    
  )
}

export default App
