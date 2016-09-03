(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssTextIndentController', function() {
    this.data = {
      indent: '20'
    };

    this.elementCss = function() {
      return 'text-indent: ' + this.data.indent + 'px;';
    }
  });
})();
