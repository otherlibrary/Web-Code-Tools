(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssBrightnessController', function() {
    this.data = {
      brightness: '5'
    };

    this.elementCss = function() {
      return '-webkit-filter: brightness(' + this.data.brightness + ');\n'
      + 'filter: brightness(' + this.data.brightness + ');';
    }
  });
})();
