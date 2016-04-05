'use strict';

module.exports = function(app){

  const bodyParser = require('body-parser'),
        logger = require('morgan'),
        cors = require('cors');

   //middlewares
   app.use(cors());
   app.use(logger('dev'));
   app.use(bodyParser.json({
       strict:true,
   }));
   app.use(bodyParser.urlencoded({
       extended:true,
   }));

   //public folder
   app.use(require('express').static('./public'));

};
