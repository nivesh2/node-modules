'use strict';

module.exports = function(app){
    const users = require('../../app/controller/users.controller');    
    
    app.get('/',(req,res)=>{
       res.render('index.jade'); 
    });
    
    app.post('/create',users.create);
    
    app.post('/authenticate',users.authenticate);
    
    app.use('/api/v1/',require('./api.route'));
    
};
