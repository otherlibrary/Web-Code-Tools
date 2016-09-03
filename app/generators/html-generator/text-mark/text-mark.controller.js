(function () {
  'use strict';

  angular.module('app.generators.html')
  .controller('HtmlTextMarkController', [function() {
    this.data = {
      text: 'This is highlighted text.'
    };

    this.elementHtml = function() {
      var html = '<mark>' + this.data.text + '</mark>';

      return html;
    }
  }]);
})();
