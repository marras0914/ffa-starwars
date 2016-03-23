'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/starwars', function(err){
    if(err){
        console.log('failed to connect to MongoDB');
    } else {
        console.log('Succesful connection to MongoDB');
    }
});