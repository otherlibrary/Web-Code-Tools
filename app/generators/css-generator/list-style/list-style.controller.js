(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssListStyleController', function() {
    this.data = {
      type: 'decimal',
      position: 'inside'
    };

    this.elementCss = function() {
      return 'list-style: ' + this.data.type + ' ' + this.data.position + ';';
    }
  });
})();
