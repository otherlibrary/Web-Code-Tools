(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssBlurController', function() {
    this.data = {
      blur: '10'
    };

    this.elementCss = function() {
      return '-webkit-filter: blur(' + this.data.blur + 'px);\n'
      + 'filter: blur(' + this.data.blur + 'px);';
    }
  });
})();
