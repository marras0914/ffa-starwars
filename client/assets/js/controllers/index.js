'use strict';
var genericController = require('./generic');

angular.module('application')
	.controller('FilmsCtrl', function($scope, $state, $http){
	    $scope = genericController($scope, $state, $http, 'films', 'film');
	}); 