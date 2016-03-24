'use strict'
const port = process.env.PORT || 3000 ;

const http = require('http');

http.createServer(function(request, response) {
  const headers = request.headers,
        method = request.method,
        url = request.url;
  
  if (method === 'GET' && url === '/') {
      response.writeHead(200,{
        'Content-Type': 'text/html',
        'charset':'utf-8',
        'X-Powered-By': 'Node'
        });
        
      response.write('<html>');
      response.write('<body>');
      response.write('<h1>Hello, World!</h1>');
      response.write('</body>');
      response.write('</html>');
      response.end();
      
  }else if(method === 'POST' && url === '/echo') {
      let body = [];
      
      request
        .on('error',()=>{console.log('Error');})
        .on('data', (data)=>{body.push(data)})
        .on('end',()=>{
            body = Buffer.concat(body).toString();
            response.statusCode = 200;
            response.end(body);
        });
        
  }else {
      response.statusCode = 404;
      response.end('Page Not Found');
      
  }
}).listen(port); // Activates this server, listening on the specified server.
