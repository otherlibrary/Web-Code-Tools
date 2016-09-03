(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssTextTransformController', function() {
    this.data = {
      transform: 'uppercase'
    };

    this.elementCss = function() {
      return 'text-transform: ' + this.data.transform + ';';
    }
  });
})();
