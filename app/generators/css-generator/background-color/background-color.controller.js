(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssBackgroundColorController', ['hexRgbaService',
    function(hexRgbaService) {
      this.data = {
        color: '#ff0000',
        opacity: 100
      };

      this.elementCss = function() {
        return 'background-color: ' + hexRgbaService.hexRgba(this.data.color, this.data.opacity) + ';';
      }
    }
  ]);
})();
