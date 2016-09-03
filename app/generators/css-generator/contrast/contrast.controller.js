(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssContrastController', function() {
    this.data = {
      contrast: '5'
    };

    this.elementCss = function() {
      return '-webkit-filter: contrast(' + this.data.contrast + ');\n'
      + 'filter: contrast(' + this.data.contrast + ');';
    }
  });
})();
