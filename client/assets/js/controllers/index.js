'use strict';

angular.module('application')
	.controller('FilmsCtrl', function($scope, $state, $http){
		require('./generic');
	    $scope = genericController($scope, $state, $http, 'films', 'film');
	}); 