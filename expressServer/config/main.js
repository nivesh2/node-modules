'use strict';
/**
 * Here we simple start server and only expose app (express) object
 * for further processing.
 */

const main = function(){

    //getting instance of Express
    const app = require('express')();
    
    //Used DEBUG for loggin in console.
    const debug = require('debug')('app:main');
    const port = process.env.PORT || 3000;

    //configure the express instance
    app.set('env','development');
    app.set('views','./views');

    //disabled for security reasons
    app.disable('x-powered-by');

     //serving static files (.html,.css,.js)
    app.use(require('express').static('./public'));

    //starting express server
    app.listen(port);
    debug(`Server running in ${app.get('env')} environment, listening on port: ${port}`);

    return app;
};

module.exports = main;
