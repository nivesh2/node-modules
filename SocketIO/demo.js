'use strict';

const app = require('express')(),
      server = require('http').Server(app),
      io = require('socket.io')(server),
      socketClient = require('socket.io-client')('http://localhost:3001');

      //server
      io.on('connection', (socket)=>{
        socket.emit('new',{message:'HelloWorld!'});
        socket.on('ack',(data)=>{
          console.log('server',data);
        });
      });

      //client
      socketClient.on('new',function(data){
        console.log('Client',data);
        socketClient.emit('ack',{message:'Hello BatMan!'});
      });

      server.listen('3001',function(){
        console.log('PORT 3001');
      });
