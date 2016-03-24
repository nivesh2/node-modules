'use strict';

const route = function(app){

    app.get('/',(req,res)=>{
        res.send('<h1>Welcome to Home Page<h1>');
    });

    app.get('/about',(req,res)=>{
       res.render('about.jade');
    });

    app.get('/data',(req,res)=>{
       res.json(
           {
               'name':'Sahil Bhagat',
               'role':'Designer',
               'status':'Single'
           }
       );
    });

};

module.exports = route;
