'use strict';

module.exports = function(){
  const config = require('./config');
  const mongoose = require('mongoose');
  const debug = require('debug')('main:mongoose');
  
  const db = mongoose.connect(config.db);
  debug('Connected to Database.');
  
  require('../app/model/user.model');
  debug('User Model Created');
  
  return db;    
};