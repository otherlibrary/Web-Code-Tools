(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssWordWrapController', function() {
    this.data = {
      wordWrap: 'normal'
    };

    this.elementCss = function() {
      return 'word-wrap: ' + this.data.wordWrap + ';';
    }
  });
})();
