(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssBoxShadowController', function() {
    this.data = {
      inset: '',
      color: '#000000',
      hPosition: '4',
      vPosition: '4',
      blurRadius: '15',
      spread: '1'
    };

    this.elementCss = function() {
      var css = 'box-shadow: ';

      if (this.data.inset === 'inset') {
        css += this.data.inset + ' ';
      }

      css += this.data.hPosition + 'px ' + this.data.vPosition + 'px ' + this.data.blurRadius
      + 'px ' + this.data.spread + 'px ' + this.data.color + ';';

      return css;
    }
  });
})();
