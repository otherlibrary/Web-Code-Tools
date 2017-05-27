(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssTextShadowController', ['hexRgbaService',
    function(hexRgbaService) {
      this.data = {
        color: '#000000',
        opacity: 100,
        hPosition: '2',
        vPosition: '2',
        blurRadius: '7'
      };

      this.elementCss = function() {
        return 'text-shadow: ' + this.data.hPosition + 'px ' + this.data.vPosition + 'px '
          + this.data.blurRadius + 'px ' + hexRgbaService.hexRgba(this.data.color, this.data.opacity) + ';';
      }
    }
  ]);
})();
