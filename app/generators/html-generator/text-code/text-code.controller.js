(function () {
  'use strict';

  angular.module('app.generators.html')
  .controller('HtmlTextCodeController', [function() {
    this.data = {
      code: 'printf("This is computer code.\\n");'
    };

    this.elementHtml = function() {
      var html = '<code>' + this.data.code + '</code>';

      return html;
    }
  }]);
})();
