'use strict';

const app = require('express')(),
      bodyParser = require('body-parser'),
      logger = require('morgan');

 //middlewares
 app.use(logger('dev'));
 app.use(bodyParser.json({
     strict:true,
 }));
 app.use(bodyParser.urlencoded({
     extended:true,
 }));

 //public folder
 app.use(require('express').static('./public'));

 //views set
 app.set('views','./views');


 //route
 app.get('/',(req,res)=>{
    res.redirect('index.html');
 });

 //upload file module added
 const upload = require('./middleware/uploadFile');
 
 app.post('/uploadFile',upload,(req,res)=>{

      if(req.file !==  undefined){

        // once uploaded save the user data along with uploaded photo path to the database.
        res.json({
           'fileName':req.file.originalname,
           'destination':req.file.filename,
           'userName':req.body.userName,
           'phoneNumer':req.body.phoneNumber
        });
      }else{
        res.json({
          'message':'Unable to Upload file'
        });
      }
  });
  
 /* to access the uploaded image:
  * <img src="/uploadphoto-12312313.jpg" alt="uploadedPhoto" />
  * but this will make it public,
  * better option is to create a separate route "/uploads"
  * which first authenticatest the route and then
  * creates "/photo" as public route.
  */
 app.use(require('express').static('./uploads'));


 app.listen(3000,function(){
     console.log('Server running | PORT: 3000');
 });
