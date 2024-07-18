import { useState } from 'react'
 
  
import ChatContainer from './components/ChatContainer';
import { ChatBoxReciever, ChatBoxSender } from './components/ChatBox';
 
import Login from './components/Login';
 

function App() {
 

  return (
    <div style={{backgroundColor: "#ece5dd" , maxHeight:"100%" , padding:50}} >
      {/* <ChatBoxReciever userName={"Raj"} message={"hi this is "} avatar={image}/>
      <ChatBoxSender userName={"Rani"} message={"hello"} avatar={image}/> 
      <ChatContainer/>
       <InputText/> */}
       <Login/>
    </div>
    
  )
}

export default App
