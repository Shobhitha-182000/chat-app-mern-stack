import React, { useEffect, useState } from 'react'
import socketIoClient from 'socket.io-client'

const ChatContainer = () => {
  let socketIo=socketIoClient('http://localhost:3000')
  const [chats,setChats]=useState([]);
const [user,setUser]=useState(localStorage.getItem("user"));
const [avatar,setAvatar]=useState(localStorage.getItem("avatar"));

  useEffect=()=>{
    socketIo.on('chat',senderChats=>{
      setChats(senderChats)
    })
  }

  return (
    <div>
      
    </div>
  )
}

export default ChatContainer
