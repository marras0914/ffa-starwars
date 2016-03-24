'use strict';

var apiService = require('../services');

var beerCtrl = function(apiService){

    this.test = "mmmmm... Beeeeer.";
    this.apiService = apiService;
    this.wikiData;

    this.getData;
};

beerCtrl.prototype.getData = function(){
    var self = this;
    this.apiService.getBeerData().then(function(response){
        console.log('response');
        self.wikiData = response.data.people;
    });
};


module.exports = beerCtrl;