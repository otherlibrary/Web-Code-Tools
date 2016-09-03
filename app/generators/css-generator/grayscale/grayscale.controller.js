(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssGrayscaleController', function() {
    this.data = {
      grayscale: '1'
    };

    this.elementCss = function() {
      return '-webkit-filter: grayscale(' + this.data.grayscale + ');\n'
      + 'filter: grayscale(' + this.data.grayscale + ');';
    }
  });
})();
