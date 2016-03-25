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
   * Single file upload
   * An object with a of file will be stored in req.file.
   */
  const upload = multer({storage:storage, fileFilter : fileFilter}).single('userPhoto');
  app.post('/uploadFile',upload,(req,res)=>{

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
