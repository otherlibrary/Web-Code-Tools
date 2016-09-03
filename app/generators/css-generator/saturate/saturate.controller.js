(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssSaturateController', function() {
    this.data = {
      saturation: '5'
    };

    this.elementCss = function() {
      return '-webkit-filter: saturate(' + this.data.saturation + ');\n'
      + 'filter: saturate(' + this.data.saturation + ');';
    }
  });
})();
