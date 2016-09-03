(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssOverflowController', function() {
    this.data = {
      type: 'overflow',
      value: 'auto'
    };

    this.elementCss = function() {
      return this.data.type + ': ' + this.data.value + ';';
    }
  });
})();
