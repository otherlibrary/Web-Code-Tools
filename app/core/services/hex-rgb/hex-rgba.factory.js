(function () {
  'use strict'

  angular.module('app.core.services')
  .factory('hexRgbaService', function() {
    return {
      // Source: https://stackoverflow.com/questions/21646738/convert-hex-to-rgba
      hexRgba: function(hex, opacity, forceRgba) {
        if (opacity == 100 && (!forceRgba || forceRgba === undefined)) {
          return hex;
        }

        var r = parseInt(hex.slice(1, 3), 16);
        var g = parseInt(hex.slice(3, 5), 16);
        var b = parseInt(hex.slice(5, 7), 16);
        
        return "rgba(" + r + ", " + g + ", " + b + ", " + (opacity / 100) + ")";
      }
    }
  });
})();
