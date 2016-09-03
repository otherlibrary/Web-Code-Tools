(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssBorderImageController', function() {
    this.data = {
      source: 'img/border-image.png',
      width: '15',
      verticalLength: '30',
      horizontalLength: '30',
      repeat: 'stretch'
    }

    this.elementCss = function() {
      return 'border: ' + this.data.width + 'px solid transparent;\n'
      + '-webkit-border-image: url(\'' + this.data.source + '\') ' + this.data.verticalLength
      + ' ' + this.data.horizontalLength + ' ' + this.data.repeat + ';';
    }
  });
})();
