'use strict';

module.exports = function(app){

  const multer = require('multer');

  const storage = multer.diskStorage({
           destination :function(req,file,cb){
               cb(null,'./uploads');
           },
           filename : function(req,file,cb){
               cb(null,req.body.userName+'-'+Date.now()+'.jpg');
           }
        });

  //defining a fileFilter
  const fileFilter = function(req, file, cb) {
    if((file.originalname).indexOf('.jpg')>=0){
      cb(null,true);
    }else{
      console.log('Error: Invalid FileType');
      cb(null,false);
    }
  };

  /*
   * Any number of file upload
   * An object with arrays of files will be stored in req.files.
   */
  const upload = multer({storage:storage, fileFilter : fileFilter}).any();
  app.post('/uploadsFiles',upload,(req,res)=>{

    if(req.files[0] !==  undefined){

        // once uploaded save the user data along with uploaded photo path to the database.
        res.json({
           'fileName':req.files[0].originalname,
           'userName':req.body.userName,
           'phoneNumer':req.body.phoneNumber
        });
      }else{
        res.json({
          'message':'Unable to Upload file'
        });
      }

  });

  /*
   * If you want to catch errors specifically from multer,
   * you can call the middleware function by yourself.
   */
  app.post('/uploadsWithError',(req,res,next)=>{
    //uploading next it optional parameter
    upload2(req,res,function(err){
      if(err){
        //error occured while uploading file
        console.log('Error while uploading File.'+ err);
        res.send('Error Done');
      }
      // everything went just fine

      if(req.files[0] !==  undefined){

        // once uploaded save the user data along with uploaded photo path to the database.
        res.json({
           'fileName':req.files[0].originalname,
           'userName':req.body.userName,
           'phoneNumer':req.body.phoneNumber
        });
      }else{
        res.json({
          'message':'Unable to Upload file'
        });
      }
    });

  });

};
