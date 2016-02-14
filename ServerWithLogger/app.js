'use strict';
/*
 * Basic usage of logger module bunyan
 *
 */
const app = require('express')(),
      log = require('bunyan').createLogger({
          name:'apiserver',
          streams: [
              {
                  level:'info',
                  stream:process.stdout,
              },
              {
                  level:'error',
                  stream:'./log/apiserver-error.log'
              }
          ],
          }),
      port = process.env.PORT || 3001;

    app.set('env','development');

    app.get('/',(req,res)=>{
        res.json({
            status:200,
            message:'Hello World!'
        });
        log.info('HelloWorld!');
    });

    app.get('/hello',(req,res)=>{
        res.json({
            status:200,
            message:'Hello World!'
        });
        log.info('HelloWorld!');
    });

    app.use((req,res)=>{

       res.json({
           status:404,
           message:'Page Not Found.'
       });
       log.error('404');
    });

    app.listen(port);
    log.info(`Server running in ${app.get('env')} environment, on port ${port}`);
