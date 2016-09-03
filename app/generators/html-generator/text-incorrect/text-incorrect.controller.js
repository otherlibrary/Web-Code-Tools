(function () {
  'use strict';

  angular.module('app.generators.html')
  .controller('HtmlTextIncorrectController', [function() {
    this.data = {
      text: 'This text is incorrect.'
    };

    this.elementHtml = function() {
      var html = '<s>' + this.data.text + '</s>';

      return html;
    }
  }]);
})();
