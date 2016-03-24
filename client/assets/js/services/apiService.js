'use strict';

var ApiService = function($http){
  this.$http = $http;
  this.url = "/beers/";
};

ApiService.prototype.getBeerData = function(){

  // return promise for controller to use
  return this.$http.get(this.url);

};

module.exports = ApiService;