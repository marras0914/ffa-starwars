'use strict';

var mongoose = require('mongoose');

var beerSchema = new mongoose.Schema({
    name: String,

});

var model = mongoose.model('Beer', beerSchema);

module.exports = model;