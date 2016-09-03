(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssBackgroundImageController', function() {
    this.data = {
      source: 'img/ottawa.jpg',
      repeat: 'no-repeat',
      position: 'left top',
      backgroundColor: '#000000',
      backgroundSize: 'cover'
    }

    this.elementCss = function() {
      return 'background: ' + this.data.backgroundColor + ' url(' + this.data.source + ') '
      + this.data.repeat + ' ' + this.data.position + ';\n'
      + 'background-size: ' + this.data.backgroundSize + ';';
    }
  });
})();
