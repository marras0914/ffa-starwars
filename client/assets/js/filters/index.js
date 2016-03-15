'use strict';

angular.module('application')
    .filter('capitalize', require('./capitalize'))
    .filter('lastdir', require('./lastdir'));