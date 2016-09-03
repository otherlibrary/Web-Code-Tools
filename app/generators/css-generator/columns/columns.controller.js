(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssColumnsController', function() {
    this.data = {
      columns: '2'
    };

    this.elementCss = function() {
      return '-moz-column-count: ' + this.data.columns + ';\n'
      + '-webkit-column-count: ' + this.data.columns + ';\n'
      + 'column-count: ' + this.data.columns + ';';
    }
  });
})();
