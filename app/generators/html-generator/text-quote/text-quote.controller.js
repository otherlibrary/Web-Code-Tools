(function () {
  'use strict';

  angular.module('app.generators.html')
  .controller('HtmlTextQuoteController', [function() {
    this.data = {
      type: 'q',
      text: 'This is a quote.'
    };

    this.elementHtml = function() {
      var html = '<' + this.data.type + '>' + this.data.text + '</' + this.data.type + '>';

      return html;
    }
  }]);
})();
