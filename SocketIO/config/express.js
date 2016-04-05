'use strict';

module.exports = (function(){
    const app = require('express')();

    app.set('views','./views');
    app.disable('x-powered-by');

    return app;
})();
