
require('./global');

//start express server
var app = rootRequire('config/main')();

//add middlewares to express
rootRequire('config/middleware')(app);

//add routes
rootRequire('route/base')(app);

//handle errors
rootRequire('route/handdleError')(app);
