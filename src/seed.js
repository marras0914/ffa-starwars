'use strict';

var Beer = require('./models/beer');

var beers = [
    'Beer1',
    'Beer2',
    'Beer3'
];

beers.forEach(function(beer, index){
    Beer.find({'name' : beer}, function(err, beers){
        if(!err && !beers.length){
            Beer.create({name: beer});
        }
    });
});