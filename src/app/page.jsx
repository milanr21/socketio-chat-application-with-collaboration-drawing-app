//page.tsx
'use client';

import { useEffect, useState } from 'react';
import { socket } from '../socket';

export default function Home() {
  const [messageInput, setMessageInput] = useState('');

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('message', (msg) => {
      console.log('The Message From The Server Is: ', msg);

      setMessages([...messages, msg]);
    });

    return () => {
      socket.off('message');
    };
  }, [messages]);

  const sendMessage = (event) => {

    event.preventDefault();

    if (messageInput.trim() !== '') {
      socket.emit('message', messageInput);
      setMessageInput('');
    }
  };

  return (
    <div className='bg-blue-300 min-h-screen'>
      {/* <p>Status: {isConnected ? 'connected' : 'disconnected'}</p>
      <p>Transport: {transport}</p> */}

      {/* <p>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </p> */}

      <div className='flex flex-col     text-white  max-w-2xl mx-auto'>
        <div className='text-2xl    mb-48'>
          {messages.map((msg, index) => (
            <div key={index}>{msg}</div>
          ))}
        </div>

        <form className='flex flex-col gap-4 '>
          <input
            type='text'
            placeholder='Enter You Message....'
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            className='py-3 text-black pl-2 rounded-md outline-none'
          />

          <button
            onClick={sendMessage}
            className='bg-red-400 uppercase rounded-md text-base max-w-36 px-1 py-3'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
