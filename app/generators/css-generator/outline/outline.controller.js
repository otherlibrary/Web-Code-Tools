(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssOutlineController', ['hexRgbaService',
    function(hexRgbaService) {
      this.data = {
        color: '#fff70d',
        opacity: 100,
        style: 'solid',
        width: '4'
      };

      this.elementCss = function() {
        return 'outline: ' + this.data.width + 'px ' + this.data.style + ' ' 
          + hexRgbaService.hexRgba(this.data.color, this.data.opacity) + ';';
      }
    }
  ]);
})();
