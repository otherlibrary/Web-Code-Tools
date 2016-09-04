(function () {
  'use strict';

  angular.module('app.core.directives')
  .directive('wctInputTel', function() {
    return {
      restrict: 'A',
      replace: false,
      link: function link(scope, element, attrs) {
        element.attr('type', 'tel');
        element.attr('class', 'form-control');
      }
    }
  });
})();
