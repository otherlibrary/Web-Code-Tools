(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssOpacityController', function() {
    this.data = {
      opacity: '1'
    };

    this.elementCss = function() {
      return 'opacity: ' + this.data.opacity + ';';
    }
  });
})();
