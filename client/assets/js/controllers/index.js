'use strict';

var genericController = require('./generic');
var beerCtrl = require('./beer');

angular.module('application')
	.controller('FilmsCtrl', function($scope, $state, $http){
	    $scope = genericController($scope, $state, $http, 'films', 'film');
	})
	.controller('SpeciesCtrl', function($scope, $state, $http){
		$scope = genericController($scope, $state, $http, 'species', 'specie');
	})
	.controller('PlanetsCtrl', function($scope, $state, $http){
		$scope = genericController($scope, $state, $http, 'planets', 'planet');
	})
	.controller('PeopleCtrl', function($scope, $state, $http){
		$scope = genericController($scope, $state, $http, 'people', 'person');
	})
	.controller('StarshipsCtrl', function($scope, $state, $http){
		$scope = genericController($scope, $state, $http, 'starships', 'starship');
	})
	.controller('VehiclesCtrl', function($scope, $state, $http){
		$scope = genericController($scope, $state, $http, 'vehicles', 'vehicle');
	})
	.controller('beerCtrl', function($scope, $state, $http){
		$scope = beerCtrl($scope, $state, $http, 'beers', 'beers');
	});