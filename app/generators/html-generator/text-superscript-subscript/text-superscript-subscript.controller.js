(function () {
  'use strict';

  angular.module('app.generators.html')
  .controller('HtmlTextSuperscriptSubscriptController', [function() {
    this.data = {
      type: 'sup',
      text: 'This is superscript.'
    };

    this.elementHtml = function() {
      var html = '<' + this.data.type + '>' + this.data.text + '</' + this.data.type + '>';

      return html;
    }
  }]);
})();
