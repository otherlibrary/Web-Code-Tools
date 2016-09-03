(function () {
  'use strict';

  angular.module('app.generators.html')
  .controller('HtmlTextItalicController', [function() {
    this.data = {
      text: 'This is italic text.'
    };

    this.elementHtml = function() {
      var html = '<i>' + this.data.text + '</i>';

      return html;
    }
  }]);
})();
