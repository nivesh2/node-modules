'use strict';

$(function(io){
  console.log(io);

  //socket programming
  var socket = io.connect('http://localhost:3001');
  socket.on('new',function(data){
    console.log(data);

    socket.emit('ack',{message: 'THis is Browser',
                       socketId:socket.id});
  });



  //form submission
   $('form').submit(function(e){

      //formData sets: multipart/form-data
      var formData = new FormData($(this)[0]);
      $.ajax({
          type:'POST',
          url:'http://localhost:3000/uploadFile',
          data : formData,
          contentType: false,
          processData: false
      }).done(function(data){
          //print response on success
          console.log(data);

      }).fail(function(data) {
            console.log('Error');
        });
      e.preventDefault();
   });


}(io));
