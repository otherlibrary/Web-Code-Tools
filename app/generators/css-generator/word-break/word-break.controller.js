(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssWordBreakController', function() {
    this.data = {
      wordBreak: 'break-all'
    };

    this.elementCss = function() {
      return 'word-break: ' + this.data.wordBreak + ';';
    }
  });
})();
