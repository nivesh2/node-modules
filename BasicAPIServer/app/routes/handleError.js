'use strict';
module.exports = function(app){
    const debug = require('debug')('main:handdleError');
    
    //Error: 404
    app.use((req,res)=>{
       debug('Page Not found, Erro: 404');
       res.status(404).json({
          success:false,
          message:'Page not found' 
       });
    });
    
        
    // Devlopment error handler
    if (app.get('env') === 'development') {        
        app.use(function(err,req,res){
            debug(`Error name: ${err.name} | message: ${err.message}`);
            
            res.status(err.status || 500).json({
            error:err,
            message: err.message,             
            });			
            
        });
        
    }else {
    // Production error handler
        app.use(function(err, req, res) {
            debug(`Error status: ${err.status} | message: ${err.message}`);
            
            res.status(err.status || 500).json({
            message: err.message,
            error: {}
            });
            
        });
        
    }

};