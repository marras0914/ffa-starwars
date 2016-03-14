'use strict';
// var angular = require('angular');

angular.module('application')
	.controller('filmsCtrl', function($scope, $state, $http){
		require('./generic');
	    $scope = genericController($scope, $state, $http, 'films', 'film');
	}); 