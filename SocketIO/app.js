 'use strict';

 const app = require('./config/express'),
      port = process.env.PORT || 3000 ,
      server = require('http').Server(app);

 //socket
 const io = require('./middleware/socket.middleware')(server);
 global.io = io;//made it globally available so that it can be accessed anywhere to emit events.

 //middleware
 require('./middleware/base.middleware')(app);

 //routes
 require('./routes/api.route')(app);
 require('./routes/socket.route')(io);

 //server start
 server.listen(port,function(){
     console.log('Server running | PORT: ' + port);
 });
