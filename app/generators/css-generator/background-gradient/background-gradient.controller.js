(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssBackgroundGradientController', ['hexRgbaService',
    function(hexRgbaService) {
      this.data = {
        type: 'linear-gradient',
        firstColor: '#000000',
        firstColorOpacity: 100,
        secondColor: '#ffffff',
        secondColorOpacity: 100,
        angle: '0',
        colorStop: '10'
      };

      this.elementCss = function() {
        var firstColor = this.data.firstColor;
        var secondColor = this.data.secondColor;

        if (this.data.firstColorOpacity < 100 || this.data.secondColorOpacity < 100) {
          firstColor = hexRgbaService.hexRgba(this.data.firstColor, this.data.firstColorOpacity, true);
          secondColor = hexRgbaService.hexRgba(this.data.secondColor, this.data.secondColorOpacity, true);
        }

        if (this.data.type === 'linear-gradient') {
          return 'background: ' + this.data.type + '(' + this.data.angle + 'deg, '
          + firstColor + ', ' + secondColor + ');';
        }
        else if (this.data.type === 'radial-gradient') {
          return 'background: ' + this.data.type + '(' + firstColor + ', '
          + secondColor + ');';
        }
        else if (this.data.type === 'repeating-linear-gradient') {
          return 'background: ' + this.data.type + '(' + this.data.angle + 'deg, '
          + firstColor + ', ' + secondColor + ' ' + this.data.colorStop + '%);';
        }
        else if (this.data.type === 'repeating-radial-gradient') {
          return 'background: ' + this.data.type + '(' + firstColor + ', '
          + secondColor + ' ' + this.data.colorStop + '%);';
        }
      }
    }
  ])
})();
