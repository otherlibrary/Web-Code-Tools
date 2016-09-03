(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssSepiaController', function() {
    this.data = {
      sepia: '1'
    };

    this.elementCss = function() {
      return '-webkit-filter: sepia(' + this.data.sepia + ');\n'
      + 'filter: sepia(' + this.data.sepia + ');';
    }
  });
})();
