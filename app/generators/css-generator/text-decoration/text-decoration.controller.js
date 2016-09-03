(function () {
  'use strict';

  angular.module('app.generators.css')
  .controller('CssTextDecorationController', function() {
    this.data = {
      textDecoration: 'underline'
    };

    this.elementCss = function() {
      return 'text-decoration: ' + this.data.textDecoration + ';';
    }
  });
})();
