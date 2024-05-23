'use client';

import { useEffect, useState } from 'react';
import { socket } from '../socket';

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState('N/A');

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }

    function onConnect() {
      setIsConnected(true);
      setTransport(socket.io.engine.transport.name);

      console.log('Connected to (client) ✔✔✔✔✔');

      socket.io.engine.on('upgrade', (transport) => {
        setTransport(transport.name);
      });
    }

    function onDisconnect() {
      setIsConnected(false);
      setTransport('N/A');
      setMessages([]);

      console.log('Disconnected from (client) ✘✘✘✘✘');
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    socket.on('message', (msg) => {
      console.log('The Message From The Server Is: ', msg);
      setMessages((prevMsg) => [...prevMsg, msg]);
    });

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  }, []);

  return (
    <div>
      <p>Status: {isConnected ? 'connected' : 'disconnected'}</p>
      <p>Transport: {transport}</p>

      <p>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </p>
    </div>
  );
}
