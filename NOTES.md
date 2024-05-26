# What is Socket.IO ?

It is the library that enables low-latency, bidirectional and event-based communication between the client and server.

//------------------------------------------------

# Pre-Socket.io

//---------------------------------------

# CLoud Computer

The cloud is the actual computer that is somewhere is the world.

Packets are the little streams of the data. Data is send and recieving the data back and forth.

# The different lays in the Network protcol

1. Physical - Cables
2. Link - Wifi, Ether
3. Network - IP
4. Transport - TCP, UDP
5. Application - HTTP, FPT, SSH in linux, SMTP

# When we use port 3000 while running the nodejs application, then we are using the port 3000 ourt of 65000 port provided by the transport layer.

UPD

- It is lightweight
- It is 8 bytes
- It is connectionless
- It is consistency
- It will send the data no matter what even there is packet loss, or even there is congenstion of the network
- UDP is very fast, and we don't have to setup the connection in order to use it.
- It is fast but it is incredible unreliable.

TPC

- It is connection based. It used three level handshake while communction,

- The client first send message the the server "says i want to make connection" and, the server responds by saying "yes you can", after that the client send the messages to the server.

- It is incredible reliable

- It also has also delivery acknowldgement. That means when the client sends the data to the server , the the server notifies the client that I sucessfully get the message from you and vice versa.

- It also retransmission of data. If the data is lost, the data will be retransmitted in the sever. The packets also arrive at the correct order.

- Congenstion Control. When there high traffic, the TCP will maintain the latency to ensure that the packets are transfered in the right order and packets are not lossed.

# Web Socket is the native browser. IT uses TCP.
 