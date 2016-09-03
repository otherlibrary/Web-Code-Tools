(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssBackgroundGradientController', function() {
    this.data = {
      type: 'linear-gradient',
      firstColor: '#000000',
      secondColor: '#ffffff',
      angle: '0',
      colorStop: '10'
    };

    this.elementCss = function() {
      if (this.data.type === 'linear-gradient') {
        return 'background: ' + this.data.type + '(' + this.data.angle + 'deg, '
        + this.data.firstColor + ', ' + this.data.secondColor + ');';
      }
      else if (this.data.type === 'radial-gradient') {
        return 'background: ' + this.data.type + '(' + this.data.firstColor + ', '
        + this.data.secondColor + ');';
      }
      else if (this.data.type === 'repeating-linear-gradient') {
        return 'background: ' + this.data.type + '(' + this.data.angle + 'deg, '
        + this.data.firstColor + ', ' + this.data.secondColor + ' ' + this.data.colorStop + '%);';
      }
      else if (this.data.type === 'repeating-radial-gradient') {
        return 'background: ' + this.data.type + '(' + this.data.firstColor + ', '
        + this.data.secondColor + ' ' + this.data.colorStop + '%);';
      }
    }
  });
})();
