(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssTextAlignController', function() {
    this.data = {
      align: 'center'
    };

    this.elementCss = function() {
      return 'text-align: ' + this.data.align + ';';
    }
  });
})();
