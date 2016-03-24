'use strict';

var express = require('express');
var Beer = require('../models/beer');
var todos = require('../../mock/beers.json');

var router = express.Router();



// router.get('/beers', function(req, res){
//     Beer.find({}, function(err, beers){
//         if(err){
//             return res.status(500).json({message: err.message});
//         }
//         res.json({beers: beers});
//     });
// });


module.exports = router;