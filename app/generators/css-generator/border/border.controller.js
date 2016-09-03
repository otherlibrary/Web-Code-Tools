(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssBorderController', function() {
    this.data = {
      type: 'same',
      color1: '#000000',
      color2: '#000000',
      color3: '#000000',
      color4: '#000000',
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
        return 'border: ' + this.data.width1 + 'px ' + this.data.style1 + ' ' + this.data.color1 + ';';
      }
      else if (this.data.type === 'different') {
        return 'border-left: ' + this.data.width1 + 'px ' + this.data.style1 + ' ' + this.data.color1 + ';\n'
        + 'border-top: ' + this.data.width2 + 'px ' + this.data.style2 + ' ' + this.data.color2 + ';\n'
        + 'border-right: ' + this.data.width3 + 'px ' + this.data.style3 + ' ' + this.data.color3 + ';\n'
        + 'border-bottom: ' + this.data.width4 + 'px ' + this.data.style4 + ' ' + this.data.color4 + ';';
      }
    }
  });
})();
