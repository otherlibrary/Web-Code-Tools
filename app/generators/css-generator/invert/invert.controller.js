(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssInvertController', function() {
    this.data = {
      invert: '1'
    };

    this.elementCss = function() {
      return '-webkit-filter: invert(' + this.data.invert + ');\n'
      + 'filter: invert(' + this.data.invert + ');';
    }
  });
})();
