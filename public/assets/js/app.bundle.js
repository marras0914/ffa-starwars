/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	  'use strict';

	  angular.module('application', [
	    'ui.router',
	    'ngAnimate',

	    //foundation
	    'foundation',
	    'foundation.dynamicRouting',
	    'foundation.dynamicRouting.animations'
	  ])
	    .config(config)
	    .run(run)
	  ;

	  config.$inject = ['$urlRouterProvider', '$locationProvider'];

	  function config($urlProvider, $locationProvider) {
	    $urlProvider.otherwise('/');

	    $locationProvider.html5Mode({
	      enabled:false,
	      requireBase: false
	    });

	    $locationProvider.hashPrefix('!');
	  }

	  function run() {
	    FastClick.attach(document.body);
	  }

	  __webpack_require__(1);
	  __webpack_require__(4);
	  __webpack_require__(7);



/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var genericController = __webpack_require__(2);
	var beerCtrl = __webpack_require__(3);

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

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	var genericController = function ($scope, $state, $http, multiple, single){

	    // Grab URL parameters
	    $scope.id = ($state.params.id || '');
	    $scope.page = ($state.params.p || 1);

	    // Use Aerobatic's caching if we're on that server
	    var urlApi = "http://swapi.co/api/"+multiple+"/"+$scope.id+"?page="+$scope.page,
	      queryParams = {
	        cache: true
	      };
	    // var urlApi = "http://api.brewerydb.com/v2/?key=7c1b5905b50b778751d381cd69ff2b90"+multiple+"/"+$scope.id+"?page="+$scope.page,
	    //   queryParams = {
	    //     cache: true
	    //   };

	    if (window.location.hostname.match('aerobaticapp')) {
	      queryParams = {
	        params: {
	          url: urlApi,
	          cache: 1,
	          ttl: 30000 // cache for 500 minutes
	        }
	      }
	      urlApi = '/proxy';
	    }

	    if ($scope.page == 1) {
	      if ($scope.id != '') {
	        // We've got a URL parameter, so let's get the single entity's data
	        $http.get(urlApi, queryParams)
	          .success(function(data) {
	            // The HTTP GET only works if it's referencing an ng-repeat'ed array for some reason...
	            if (data.homeworld) data.homeworld = [data.homeworld];

	            $scope[single] = data;

	            var name = data.name;
	            if (single == 'film') name = data.title;
	            // Get an image from a Google Custom Search (this API key only works on localhost & aerobaticapp.com)
	            var googleUrl = 'https://www.googleapis.com/customsearch/v1?cx=001000040755652345309%3Aosltt3fexvk&q='+encodeURIComponent(name)+'&imgSize=large&num=1&fileType=jpg&key=AIzaSyBDvUGYCJfOyTNoJzk-5P9vE-dllx-Wne4',
	              googleParams = { cache: true };

	            if (window.location.hostname.match('aerobaticapp')) {
	              googleParams = {
	                params: {
	                  url: googleUrl,
	                  cache: 1,
	                  ttl: 300000 // cache for 5000 minutes
	                }
	              }
	              googleUrl = '/proxy';
	            }

	            $http.get(googleUrl, googleParams)
	            .then(function(result) {
	              $scope.imageUrl = result.data.items[0].pagemap.cse_image[0].src;
	            }, function(err) {
	              $scope.imageUrl = "Unknown";
	            });
	          })

	      } else {
	        // We're on page 1, so thet next page is 2.
	        $http.get(urlApi, queryParams)
	        .success(function(data) {
	          $scope[multiple] = data;
	          if (data['next']) $scope.nextPage = 2;
	        });
	      }
	    } else {
	      // If there's a next page, let's add it. Otherwise just add the previous page button.
	      $http.get(urlApi, queryParams)
	      .success(function(data) {
	        $scope[multiple] = data;
	        if (data['next']) $scope.nextPage = 1*$scope.page + 1;
	      });
	      $scope.prevPage = 1*$scope.page - 1;
	    }
	    return $scope;

	}

	module.exports = genericController;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	var beerCtrl = function ($scope, $state, $http, multiple, single){

	    // Grab URL parameters
	    $scope.id = ($state.params.id || '');
	    $scope.page = ($state.params.p || 1);

	    // Use Aerobatic's caching if we're on that server
	    // var urlApi = "http://swapi.co/api/"+multiple+"/"+$scope.id+"?page="+$scope.page,
	    //   queryParams = {
	    //     cache: true
	    //   };
	    var urlApi = "https://api.brewerydb.com/v2/beers?styleId=93&abv=6&key=7c1b5905b50b778751d381cd69ff2b90",
	      queryParams = {
	        cache: true
	      };

	    // if (window.location.hostname.match('aerobaticapp')) {
	    //   queryParams = {
	    //     params: {
	    //       url: urlApi,
	    //       cache: 1,
	    //       ttl: 30000 // cache for 500 minutes
	    //     }
	    //   }
	    //   urlApi = '/proxy';
	    // }

	    if ($scope.page == 1) {
	      if ($scope.id != '') {
	        // We've got a URL parameter, so let's get the single entity's data
	        $http.get(urlApi, queryParams)
	          .success(function(data) {
	            // The HTTP GET only works if it's referencing an ng-repeat'ed array for some reason...
	            if (data.homeworld) data.homeworld = [data.homeworld];

	            $scope[single] = data;

	            var name = data.name;
	            if (single == 'beer') name = data.title;
	            // Get an image from a Google Custom Search (this API key only works on localhost & aerobaticapp.com)
	            var googleUrl = 'https://www.googleapis.com/customsearch/v1?cx=001000040755652345309%3Aosltt3fexvk&q='+encodeURIComponent(name)+'&imgSize=large&num=1&fileType=jpg&key=AIzaSyBDvUGYCJfOyTNoJzk-5P9vE-dllx-Wne4',
	              googleParams = { cache: true };

	            if (window.location.hostname.match('aerobaticapp')) {
	              googleParams = {
	                params: {
	                  url: googleUrl,
	                  cache: 1,
	                  ttl: 300000 // cache for 5000 minutes
	                }
	              }
	              googleUrl = '/proxy';
	            }

	            $http.get(googleUrl, googleParams)
	            .then(function(data) {
	              $scope.imageUrl = data.data.items[0].pagemap.cse_image[0].src;
	            }, function(err) {
	              $scope.imageUrl = "Unknown";
	            });
	          })

	      } else {
	        // We're on page 1, so thet next page is 2.
	        $http.get(urlApi, queryParams)
	        .success(function(data) {
	          $scope[multiple] = data;
	          if (data['next']) $scope.nextPage = 2;
	        });
	      }
	    } else {
	      // If there's a next page, let's add it. Otherwise just add the previous page button.
	      $http.get(urlApi, queryParams)
	      .success(function(data) {
	        $scope[multiple] = data;
	        if (data['next']) $scope.nextPage = 1*$scope.page + 1;
	      });
	      $scope.prevPage = 1*$scope.page - 1;
	    }
	    return $scope;

	}

	module.exports = beerCtrl;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('application')
	    .filter('capitalize', __webpack_require__(5))
	    .filter('lastdir', __webpack_require__(6));

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	var capitalize = function() {
	  // Send the results of this manipulating function
	  // back to the view.
	  return function (input) {
	    // If input exists, replace the first letter of
	    // each word with its capital equivalent.
	    return (!!input) ? input.replace(/([^\W_]+[^\s-]*) */g,
	      function(txt){return txt.charAt(0).toUpperCase() +
	        txt.substr(1)}) : '';
	  }
	}

	module.exports = capitalize;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	var lastdir = function () {
	  // Send the results of this manipulating function
	  // back to the view.
	  return function (input) {
	    // Simple JavaScript to split and slice like a fine chef.
	    return (!!input) ? input.split('/').slice(-2, -1)[0] : '';
	  }
	}

	module.exports = lastdir;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('application')
	    .directive("getProp", __webpack_require__(8));

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	var getProp = 
	    ['$http', '$filter', function($http, $filter) {
	      return {
	        // All we're going to display is the scope's property variable.
	        template: "{{property}}",
	        scope: {
	          // Rather than hard-coding 'name' as in 'person.name', we may need
	          // to access 'title' in some instances, so we use a variable (prop) instead.
	          prop: "=",
	          // This is the swapi.co URL that we pass to the directive.
	          url: "="
	        },
	        link: function(scope, element, attrs) {
	          // Make our 'capitalize' filter usable here
	          var capitalize = $filter('capitalize');
	          // Make an http request for the 'url' variable passed to this directive
	          $http.get(scope.url, { cache: true }).then(function(result) {
	            // Get the 'prop' property of our returned data so we can use it in the template.
	            scope.property = capitalize(result.data[scope.prop]);
	          }, function(err) {
	            // If there's an error, just return 'Unknown'.
	            scope.property = "Unknown";
	          });
	        }
	      }
	    }];

	module.exports = getProp;

/***/ }
/******/ ]);