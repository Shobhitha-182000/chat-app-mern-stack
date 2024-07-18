import React, { useState } from 'react'
import './InputText.css'

const InputText = ({addMessage}) => {
    const [message,setMessage]=useState('');

   const addAMessage=()=>{
    addMessage({
        message
    })
   }
    addAMessage();
  return (
    <div className="textContainer">
    <textarea className="textarea" placeholder="Type a message" value={message} onChange={e=>setMessage(e.target.value)} />
    <button className="button" type="primary">Send</button>
  </div>
  )
}

export default InputText
