(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssCursorController', function() {
    this.data = {
      type: 'pointer'
    };

    this.elementCss = function() {
      return 'cursor: ' + this.data.type + ';';
    }
  });
})();
