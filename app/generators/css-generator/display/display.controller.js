(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssDisplayController', function() {
    this.data = {
      display: 'block'
    };

    this.elementCss = function() {
      return 'display: ' + this.data.display + ';';
    }
  });
})();
