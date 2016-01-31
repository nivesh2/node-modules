'use strict';
/**
 * Setting basic configurations for Express and only expose app (express) object
 * for further processing.
 */

module.exports = function(){
    
    //getting instance of Express
    const app = require('express')();
    
    //configure the express instance
    app.set('env',process.env.NODE_ENV);
    app.set('views','./app/views');

    //disabled for security reasons
    app.disable('x-powered-by');
    
     //serving static files (.html,.css,.js) 
    app.use(require('express').static('./public'));
    
    return app;
};
