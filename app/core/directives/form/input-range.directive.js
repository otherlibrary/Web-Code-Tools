(function () {
  'use strict';

  angular.module('app.core.directives')
  .directive('wctInputRange', function() {
    return {
      restrict: 'A',
      replace: false,
      link: function link(scope, element, attrs) {
        element.attr('type', 'range');
        element.attr('class', 'form-control');
      }
    }
  });
})();
