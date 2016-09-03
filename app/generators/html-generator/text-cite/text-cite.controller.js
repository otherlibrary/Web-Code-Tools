(function () {
  'use strict';

  angular.module('app.generators.html')
  .controller('HtmlTextCiteController', [function() {
    this.data = {
      text: 'This is cited text.'
    };

    this.elementHtml = function() {
      var html = '<cite>' + this.data.text + '</cite>';

      return html;
    }
  }]);
})();
