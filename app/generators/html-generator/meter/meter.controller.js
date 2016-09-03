(function () {
  'use strict';

  angular.module('app.generators.html')
  .controller('HtmlMeterController', [function() {
    this.data = {
      value: '0.6'
    };

    this.elementHtml = function() {
      var html = '<meter value="' + this.data.value + '">' + parseInt((parseFloat(this.data.value) * 100)) + '%</meter>';

      return html;
    }
  }]);
})();
