(function () {
  'use strict';

  angular.module('app.generators.html')
  .controller('HtmlTextUnderlineController', [function() {
    this.data = {
      text: 'This text is underlined.'
    };

    this.elementHtml = function() {
      var html = '<u>' + this.data.text + '</u>';

      return html;
    }
  }]);
})();
