(function () {
  'use strict';

  angular.module('app.generators.html')
  .controller('HtmlTextBiDirectionalOverrideController', [function() {
    this.data = {
      direction: 'rtl',
      text: 'This text is backwards!'
    };

    this.elementHtml = function() {
      var html = '<bdo dir="' + this.data.direction + '">' + this.data.text + '</bdo>';

      return html;
    }
  }]);
})();
