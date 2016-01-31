'use strict';
var mongoose = require('mongoose');
//var crypto = require('crypto');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
   username:String,
   email:String,
   password: String,
});

// TODO: Add module to save encrypted password in database using crypto
mongoose.model('User',UserSchema);