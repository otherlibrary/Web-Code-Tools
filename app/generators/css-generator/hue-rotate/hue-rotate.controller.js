(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssHueRotateController', function() {
    this.data = {
      hueRotate: '100'
    };

    this.elementCss = function() {
      return '-webkit-filter: hue-rotate(' + this.data.hueRotate + 'deg);\n'
      + 'filter: hue-rotate(' + this.data.hueRotate + 'deg);';
    }
  });
})();
