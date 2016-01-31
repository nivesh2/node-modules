'use strict';

module.exports = (function(){
    
    var express = require('express');
    var apiRoutes = express.Router();
   
    const index = require('../../app/controller/index.controller');
    const auth = require('../../middleware/auth.middleware');
    
    apiRoutes.use(auth);
    
    apiRoutes.get('/info',index.getInfo);
    
    return apiRoutes;
    
})();