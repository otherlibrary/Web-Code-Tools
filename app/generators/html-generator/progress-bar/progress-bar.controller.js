(function () {
  'use strict';

  angular.module('app.generators.html')
  .controller('HtmlProgressBarController', [function() {
    this.data = {
      value: '35'
    };

    this.elementHtml = function() {
      var html = '<progress value="' + this.data.value + '" max="100">' + this.data.value + '%</meter>';

      return html;
    }
  }]);
})();
