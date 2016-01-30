
//start express server
var app = require('./config/main.js')();

//add middlewares to express
require('./config/middleware.js')(app);

//add routes
require('./route/base.js')(app);

//handle errors
require('./route/handdleError.js')(app);
