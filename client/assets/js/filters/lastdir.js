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