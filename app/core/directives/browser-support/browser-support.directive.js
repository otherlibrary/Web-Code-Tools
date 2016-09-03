(function () {
  'use strict';

  angular.module('app.core.directives')
  .directive('browserSupport', ['browserSupportService',
    function(browserSupportService) {
      return {
        restrict: 'E',
        templateUrl: 'core/directives/browser-support/browser-support.template.html',
        link: function(scope, element, attrs) {
          scope.browsers = {};
          
          browserSupportService.getBrowsers().then(function(data) {
            scope.browsers = data.browsers;
          });
        }
      }
  }]);
})();
