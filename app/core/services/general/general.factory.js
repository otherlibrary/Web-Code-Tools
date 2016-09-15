(function () {
  'use strict'

  angular.module('app.core.services')
  .factory('generalService', function() {
    return {
      // TODO: Change this function name to something better.
      // Updates an array of objects.
      updateKeyValueArray: function(initNum, prevNum, array, obj) {
        var newArray = array.slice();

        if (initNum > prevNum) {
          for (var i = 0; i < (initNum - prevNum); ++i) {
            newArray.push(new obj());
          }
        }
        else if (initNum < prevNum) {
          for (var i = 0; i < (prevNum - initNum); ++i) {
            newArray.pop(new obj());
          }
        }

        return newArray;
      }
    }
  });
})();
