(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssBackgroundColorController', function() {
    this.data = {
      color: '#ff0000'
    };

    this.elementCss = function() {
      return 'background-color: ' + this.data.color + ';';
    }
  });
})();
