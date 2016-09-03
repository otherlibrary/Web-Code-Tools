(function () {
  'use strict';

  angular.module('app.core.components')
  .config(['$breadcrumbProvider', function($breadcrumbProvider) {
    $breadcrumbProvider.setOptions({
      template: '<li ng-repeat="step in steps"><a href="{{step.ncyBreadcrumbLink}}" ng-bind="step.ncyBreadcrumbLabel"></a></li>'
    });
  }])
})();
