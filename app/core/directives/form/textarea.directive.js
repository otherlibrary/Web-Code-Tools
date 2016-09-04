(function () {
  'use strict';

  angular.module('app.core.directives')
  .directive('wctTextarea', function() {
    return {
      restrict: 'A',
      replace: false,
      link: function link(scope, element, attrs) {
        element.attr('class', 'form-control');
      }
    }
  });
})();
