(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssTabSizeController', function() {
    this.data = {
      tabSize: '4'
    };

    this.elementCss = function() {
      return '-moz-tab-size: ' + this.data.tabSize + ';\n'
      + '-o-tab-size: ' + this.data.tabSize + ';\n'
      + 'tab-size: ' + this.data.tabSize + ';';
    }
  });
})();
