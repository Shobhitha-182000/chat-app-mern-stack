import React, { useState } from 'react';
import './InputText.css';

const InputText = ({ addMessage }) => {
  const [message, setMessage] = useState('');

  const handleAddMessage = () => {
    if (message.trim() === '') return;  
    addMessage({ message });
    setMessage('');  
  };

  return (
    <div className="textContainer">
      <textarea
        className="textarea"
        placeholder="Type a message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button className="button" type="button" onClick={handleAddMessage}>Send</button>
    </div>
  );
};

export default InputText;
