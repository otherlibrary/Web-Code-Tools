(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssWordSpacingController', function() {
    this.data = {
      wordSpacing: '30'
    };

    this.elementCss = function() {
      return 'word-spacing: ' + this.data.wordSpacing + 'px;';
    }
  });
})();
