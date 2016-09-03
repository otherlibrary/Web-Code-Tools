(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssLineHeightController', function() {
    this.data = {
      lineHeight: '2'
    };

    this.elementCss = function() {
      return 'line-height: ' + this.data.lineHeight + ';';
    }
  });
})();
