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