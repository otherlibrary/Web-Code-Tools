(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssVisibilityController', function() {
    this.data = {
      visibility: 'visible'
    };

    this.elementCss = function() {
      return 'visibility: ' + this.data.visibility + ';';
    }
  });
})();
