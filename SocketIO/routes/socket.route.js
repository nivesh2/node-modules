'use strict';

module.exports = function(io){

  //new client
  io.on('connection', (socket)=>{
    socket.emit('new',{message:'HelloWorld!'});
    socket.on('ack',(data)=>{
      console.log(data);
    });
  });


};
