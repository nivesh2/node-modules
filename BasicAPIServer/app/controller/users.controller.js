'use strict';
module.exports = (function(){
    const config = require('../../config/config');
    const User = require('mongoose').model('User');
    const debug = require('debug')('main:user-controller');
    const jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
    // TODO: Add validation module.
    
    var that={};
        
    that.create = (req,res) =>{
        
        var user = new User(req.body);
        user.save((err)=>{
            if(err){
                //next(err);
                // FIXME: handle database error efficiently
                debug('Account creation failure, Error: ',err);
                res.json({
                    success:false,
                    message:'Failed to create user account'
                });
            }else{
                debug('User account successfully created.');
                res.json({
                    success:true,
                    message:'User Account created',
                    user: user,
                    });                
            }
        });
    };
    
    that.authenticate = (req,res)=>{
        User.findOne({
            username:req.body.username,
        },function(err, user){
           
           if(err) {
               throw err;
           }
           
           if(!user){
               res.json({
                   success:false,
                   message:'Authentication failed. '+ 
                    'User not found.'
                   });                   
           }
            
           if(user.password !== req.body.password){
               res.json({
                   success:false,
                   message:'Authentication failed. '+ 
                    'UserName/Password is invalid.'
                   });
                                      
           } else {
               
                debug('User authenticated');
				// if user is found and password is right
				// create a token
                const token = jwt.sign(user,config.secret,{
                    expiresIn: config.tokenExpiresIn,
                    });                    
                
                res.json({
                   success: true,
                   message:'User authenticated',
                   token: token,
                   user: user
                });

           }           
           
        });
        
        
    };
    
    return that;
    
})();

