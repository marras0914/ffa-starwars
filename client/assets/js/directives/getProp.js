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