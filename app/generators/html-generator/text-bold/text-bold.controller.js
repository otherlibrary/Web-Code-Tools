(function () {
  'use strict';

  angular.module('app.generators.html')
  .controller('HtmlTextBoldController', [function() {
    this.data = {
      text: 'This text is bold.'
    };

    this.elementHtml = function() {
      var html = '<b>' + this.data.text + '</b>';

      return html;
    }
  }]);
})();
