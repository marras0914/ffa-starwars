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