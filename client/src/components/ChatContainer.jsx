import React, { useEffect, useState, useRef } from 'react';
import socketIoClient from 'socket.io-client';
import Login from './Login';
import { ChatBoxReciever, ChatBoxSender } from './ChatBox';
import InputText from './InputText';
import { IoIosLogOut } from "react-icons/io";
import './ChatContainer.css'

const ChatContainer = () => {
  const [chats, setChats] = useState([]);
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [avatar, setAvatar] = useState(localStorage.getItem("avatar"));
  const socketRef = useRef(null);
  const messageQueue = useRef([]); 

  useEffect(() => {
    if (!socketRef.current) {
      socketRef.current = socketIoClient('http://localhost:3000');

      socketRef.current.on('chat', (senderChats) => {
        if (Array.isArray(senderChats)) {
          setChats(senderChats);
        } else {
          setChats(prevChats => [...prevChats, senderChats]);
        }
      });

      socketRef.current.on('connect', () => {
        while (messageQueue.current.length > 0) {
          const message = messageQueue.current.shift();
          socketRef.current.emit('chat', message);
        }
      });
    }

    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };
  }, []);

  const sendChatToSocket = (chat) => {
    if (socketRef.current && socketRef.current.connected) {
      socketRef.current.emit('chat', chat);
    } else {
      messageQueue.current.push(chat);
    }
  };

  const addMessage = (chat) => {
    const newChat = {...chat , user:localStorage.getItem("user") , avatar}
    
    setChats([...chats , newChat])
    sendChatToSocket([...chats , newChat])
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("avatar");
    setUser("");
  };

  const ChatsList = () => {
    if (!Array.isArray(chats)) {
      return null;
    }
    return chats.map((chat, index) => {
      if (chat.user === user) {
        return <ChatBoxSender key={index} message={chat.message} avatar={chat.avatar} />;
      }
      return <ChatBoxReciever key={index} message={chat.message} avatar={chat.avatar} />;
    });
  };

  return (
    <div className='chat-container'>
      {user ? (
        <>
          <div className='chat-header'>
            <h2>{user}</h2>
            <p onClick={logout} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
              <IoIosLogOut style={{ height: '24px', width: '24px', color: 'white' }} />
            </p>
          </div>
          <div className='chats-list'>
            <ChatsList />
          </div>
          <InputText addMessage={addMessage} />
        </>
      ) : (
        <Login setUser={setUser} />
      )}
    </div>
  );
};

export default ChatContainer;
