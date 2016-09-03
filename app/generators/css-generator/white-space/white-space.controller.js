(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssWhiteSpaceController', function() {
    this.data = {
      whiteSpace: 'normal'
    };

    this.elementCss = function() {
      return 'white-space: ' + this.data.whiteSpace + ';';
    }
  });
})();
