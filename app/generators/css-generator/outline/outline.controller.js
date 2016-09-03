(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssOutlineController', function() {
    this.data = {
      color: '#fff70d',
      style: 'solid',
      width: '4'
    };

    this.elementCss = function() {
      return 'outline: ' + this.data.width + 'px ' + this.data.style + ' ' + this.data.color + ';';
    }
  });
})();
