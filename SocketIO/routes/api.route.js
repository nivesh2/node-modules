'use strict';

module.exports = function(app){
  app.get('/',(req,res)=>{
    res.redirect('index.html');
  });


  const upload = require('../middleware/uploadFile');
  app.post('/uploadFileForm',upload,(req,res)=>{
      if(req.file !=  undefined){
        // once uploaded save the user data along with uploaded photo path to the database.
        res.json({
           "fileName":req.file.originalname,
           "destination":req.file.filename,
           "userName":req.body.userName,
           "phoneNumer":req.body.phoneNumber
        });
      }else{
        res.json({
          "message":"Unable to Upload file"
        })
      }
  });


};
