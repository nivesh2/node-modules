'use strict';

$(function(io){
  console.log(io);

  //socket programming
  var socket = io.connect('http://localhost:3001/chat');
  socket.on('new',function(data){
    console.log(data);

    socket.emit('ack',{message: 'THis is Browser',
                       socketId:socket.id});
  });

}(io));
