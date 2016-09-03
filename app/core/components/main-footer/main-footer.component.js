(function () {
  'use strict';

  angular.module('app.core.components')
  .component('mainFooter', {
    templateUrl: 'core/components/main-footer/main-footer.template.html',
    controller: ['deviceDetector', function(deviceDetector) {
      this.browser = deviceDetector.browser;
    }]
  });
})();
