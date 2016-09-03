(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssLetterSpacingController', function() {
    this.data = {
      spacing: '10'
    };

    this.elementCss = function() {
      return 'letter-spacing: ' + this.data.spacing + 'px;';
    }
  });
})();
