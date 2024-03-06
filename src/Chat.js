import React, { useState } from 'react';
import styled from 'styled-components';

const ChatContainer = styled.div`
  width: 300px; /* Adjust the width as needed */
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 20px;
  overflow: hidden; /* Ensure content doesn't overflow */
`;

const ChatHeader = styled.div`
  background-color: #333;
  color: #fff;
  padding: 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const ChatBody = styled.div`
  padding: 10px;
  max-height: 300px; /* Adjust max-height as needed */
  overflow-y: auto;
`;

const Message = styled.div`
  background-color: #f2f2f2;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 5px;
`;

const InputContainer = styled.div`
  padding: 10px;
  border-top: 1px solid #ccc;
  display: flex; /* Align input and button horizontally */
`;

const Input = styled.input`
  flex: 1; /* Take up remaining space */
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 8px 15px;
  background-color: #333;+
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleMessageSubmit = () => {
    if (inputValue.trim() !== '') {
      setMessages([...messages, inputValue]);
      setInputValue('');
    }
  };

  return (
    <ChatContainer>
      <ChatHeader>Chat</ChatHeader>
      <ChatBody>
        {messages.map((message, index) => (
          <Message key={index}>{message}</Message>
        ))}
      </ChatBody>
      <InputContainer>
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message..."
        />
        <Button onClick={handleMessageSubmit}>Send</Button>
      </InputContainer>
    </ChatContainer>
  );
};

export default Chat;
