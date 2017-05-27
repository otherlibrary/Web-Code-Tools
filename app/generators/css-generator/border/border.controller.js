(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssBorderController', ['hexRgbaService',
    function(hexRgbaService) {
      this.data = {
        type: 'same',
        color1: '#000000',
        color2: '#000000',
        color3: '#000000',
        color4: '#000000',
        opacity1: 100,
        opacity2: 100,
        opacity3: 100,
        opacity4: 100,
        style1: 'solid',
        style2: 'solid',
        style3: 'solid',
        style4: 'solid',
        width1: '2',
        width2: '2',
        width3: '2',
        width4: '2'
      }

      this.elementCss = function() {
        if (this.data.type === 'same') {
          return 'border: ' + this.data.width1 + 'px ' + this.data.style1 + ' ' 
            + hexRgbaService.hexRgba(this.data.color1, this.data.opacity1) + ';';
        } else if (this.data.type === 'different') {
          var forceRgba = false;

          if (this.data.opacity1 < 100 || 
            this.data.opacity2 < 100 || 
            this.data.opacity3 < 100 || 
            this.data.opacity4 < 100) {
              forceRgba = true;
            }
          
          return 'border-left: ' + this.data.width1 + 'px ' + this.data.style1 + ' ' 
            + hexRgbaService.hexRgba(this.data.color1, this.data.opacity1, forceRgba) + ';\n'
            + 'border-top: ' + this.data.width2 + 'px ' + this.data.style2 + ' '
            + hexRgbaService.hexRgba(this.data.color2, this.data.opacity2, forceRgba) + ';\n'
            + 'border-right: ' + this.data.width3 + 'px ' + this.data.style3 + ' '
            + hexRgbaService.hexRgba(this.data.color3, this.data.opacity3, forceRgba) + ';\n'
            + 'border-bottom: ' + this.data.width4 + 'px ' + this.data.style4 + ' '
            + hexRgbaService.hexRgba(this.data.color4, this.data.opacity4, forceRgba) + ';';
        }
      }
    }
  ]);
})();
