(function () {
  'use strict';

  angular.module('app.core.directives')
  .directive('sectionCode', function() {
    return {
      restrict: 'E',
      templateUrl: 'core/directives/section-code/section-code.template.html',
      scope: {
        title: '@?title',
        code: '@code',
        codeId: '@codeId'
      },
      link: function(scope, element, attrs) {
        if (scope.title == undefined) {
          scope.title = "Copy your code.";
        }
      }
    };
  });
})();
