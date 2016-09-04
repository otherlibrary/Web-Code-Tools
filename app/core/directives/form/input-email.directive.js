(function () {
  'use strict';

  angular.module('app.core.directives')
  .directive('wctInputEmail', function() {
    return {
      restrict: 'A',
      replace: false,
      link: function link(scope, element, attrs) {
        element.attr('type', 'email');
        element.attr('class', 'form-control');
      }
    }
  });
})();
