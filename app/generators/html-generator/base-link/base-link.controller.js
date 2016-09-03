(function () {
  'use strict';

  angular.module('app.generators.html')
  .controller('HtmlBaseLinkController', [function() {
    this.data = {
      baseUrl: 'http://',
      target: '_blank'
    };

    this.elementHtml = function() {
      var html = '<base href="' + this.data.baseUrl + '" target="' + this.data.target + '">';

      return html;
    }
  }]);
})();
