(function () {
  'use strict';

  angular.module('app.core.directives')
  .directive('wctLabel', function() {
    return {
      restrict: 'A',
      replace: false,
      link: function link(scope, element, attrs) {
        element.attr('class', 'control-label');
      }
    }
  });
})();
