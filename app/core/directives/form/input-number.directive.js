(function () {
  'use strict';

  angular.module('app.core.directives')
  .directive('wctInputNumber', function() {
    return {
      restrict: 'A',
      replace: false,
      link: function link(scope, element, attrs) {
        element.attr('type', 'number');
        element.attr('class', 'form-control');
      }
    }
  });
})();
