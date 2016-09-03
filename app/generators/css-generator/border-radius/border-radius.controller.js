(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssBorderRadiusController', function() {
    this.data = {
      type: 'same',
      all: '10',
      topLeft: '5',
      topRight: '10',
      bottomRight: '15',
      bottomLeft: '20'
    }

    this.elementCss = function() {
      if (this.data.type === 'same') {
        return 'border-radius: ' + this.data.all + 'px;';
      }
      else if (this.data.type === 'different') {
        return 'border-radius: ' + this.data.topLeft + 'px '
        + this.data.topRight + 'px '
        + this.data.bottomRight + 'px '
        + this.data.bottomLeft + 'px;';
      }
    }
  });
})();
