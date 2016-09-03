(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssTransformController', function() {
    this.data = {
      rotate: '2',
      skewY: '-5',
      skewX: '10',
      scale: '1'
    };

    this.elementCss = function() {
      return '-webkit-transform: scale(' + this.data.scale + ') rotate(' + this.data.rotate + 'deg) '
      + 'skewY(' + this.data.skewY + 'deg) skewX(' + this.data.skewX + 'deg);\n'
      + 'transform: scale(' + this.data.scale + ') rotate(' + this.data.rotate + 'deg) '
      + 'skewY(' + this.data.skewY + 'deg) skewX(' + this.data.skewX + 'deg);';
    }
  });
})();
