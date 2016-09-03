(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssBoxResizeController', function() {
    this.data = {
      resize: 'both'
    };

    this.elementCss = function() {
      return 'resize: ' + this.data.resize + ';\n' + 'overflow: auto';
    }
  });
})();
