'use strict';

module.exports = function(server){
  //while initialising socket object we need to pass the server
  const io = require('socket.io')(server);
  return io;
};
