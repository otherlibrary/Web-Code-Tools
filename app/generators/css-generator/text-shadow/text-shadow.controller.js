(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssTextShadowController', function() {
    this.data = {
      color: '#000000',
      hPosition: '2',
      vPosition: '2',
      blurRadius: '7'
    };

    this.elementCss = function() {
      return 'text-shadow: ' + this.data.hPosition + 'px ' + this.data.vPosition + 'px '
      + this.data.blurRadius + 'px ' + this.data.color + ';';
    }
  });
})();
